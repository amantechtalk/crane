import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../components/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const auth = isAuthenticated();
  
  console.log(auth); // Logs whether the user is authenticated
  
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;




