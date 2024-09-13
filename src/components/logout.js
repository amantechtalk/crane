import React, { useState ,useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './log.css';

import AuthContext from './AuthContext';  

function Logout() {

    const { logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout =  async(e) => {
        const success1= await logout();
        
      
        navigate('/landing-page'); 

    }
    handleLogout();
}
export default Logout;