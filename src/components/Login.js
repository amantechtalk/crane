import React, { useState ,useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './log.css';

import AuthContext from './AuthContext';  

function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const { login } = useContext(AuthContext);
  
  const { logout} = useContext(AuthContext);


  const handleLogin =  async(e) => {
    e.preventDefault();

    const success = await login(phoneNumber, password);
   
    
    if (success) {
      navigate('/landing-page'); 
   
    } else {
      const success1= await logout();
     
      alert('Login failed');
    }
    // Implement login logic here (e.g., API call)
   
    // Navigate to the home page after successful login
  };

  return (
    <div  class="box-form">
     
    	<div class="left">
		<div class="overlay">
    <h1>Crane World.</h1>
		<p>Get crane in affordable Price</p>
	
	
		</div>
	</div>





     
      <div class="right">
      <h4>Login</h4>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="number" 
            value={phoneNumber} 
            onChange={(e) => setPhoneNumber(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup"><p>Sign up</p></Link>
      </p>
      <p>
        <Link to="/forgot-password"><p>Forgot your password?</p></Link>
      </p>
    
    </div>
    </div>
  );
}

export default Login;
