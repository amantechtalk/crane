import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './log.css';
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Implement signup logic here (e.g., API call)
    console.log('Signing up with', { email, password });
    navigate('/'); // Navigate to login page after successful signup
  };

  return (
    <div class="box-form">
          	<div class="left">
		<div class="overlay">
    <h1>Crane World.</h1>
		
	
	
		</div>
	</div>
        <div class="right">
        <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
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
          <label>Mobile:</label>
          <input 
            type="number" 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
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
        <div className="form-group">
          <label>Confirm Password:</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/"><p>Login</p></Link>
      </p>
    </div>
    </div>
  );
}

export default Signup;
