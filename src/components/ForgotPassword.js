import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './log.css';
function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Implement forgot password logic here (e.g., API call)
    console.log('Resetting password for', email);
    alert("Password reset link sent to your email");
    navigate('/'); // Navigate back to login page after handling forgot password
  };

  return (
    <div className="auth-form-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      <p>
        Remembered your password? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default ForgotPassword;
