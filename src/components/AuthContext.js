import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (phoneNumber, password) => {
    try {
       
      const res = await axios.post('http://13.235.114.115:9000/auth/access/token', { phoneNumber, password });
      const token = res.data.token;
      const res1=res.data;
      

      
      localStorage.setItem('token', token);
      if(res1.access_token){
      setUser({ phoneNumber });
      return true;
      }
      else{
        return false;
      }
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (phoneNumber, password) => {
    try {
      await axios.post('http://13.235.114.115:9000/auth/register', { phoneNumber, password });
      return true;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const isAuthenticated = () => {
   const auth2= localStorage.getItem('token');
   console.log(String(auth2));
  if( auth2){
    return true;
  }
  else{
    return false;
  }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
  
    if (token) {
      // Fetch user data based on token if needed
      setUser({ phoneNumber: '8969774291' });
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuthenticated, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
