import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './log.css';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login logic here (e.g., API call)
    console.log('Logging in with', { email, password });
    navigate('/landing-page'); // Navigate to the home page after successful login
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
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
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
