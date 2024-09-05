import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './log.css';
import Navbar from './nav';
function Request() {
  const [Day, setDay] = useState('');
  const [Address, setAddress] = useState('');
  const [Time, setTime] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
   
    // Implement signup logic here (e.g., API call)
  
    navigate('/'); // Navigate to login page after successful signup
  };

  return (
    <div>
    <Navbar />
    <div className='box-form'>
   
    
     
    
        <div class="right">
        <h2>Submit proposal</h2>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>For how much Day:</label>
          <input 
            type="text" 
            value={Day} 
            onChange={(e) => setDay(e.target.value)} 
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
          <label>Address:</label>
          <input 
            type="text" 
            value={Address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Time</label>
          <input 
            type="text" 
            value={Time} 
            onChange={(e) => setTime(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit Proporsal</button>
      </form>
     
    </div>
    </div>
    </div>
    
  );
}

export default Request;
