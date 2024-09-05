import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import LandingPage from './components/LandingPage';
import Request from './components/Request';
import {
  isMobile,
  isTablet,
  isDesktop,
} from 'react-device-detect';



function App() {
  return (
    <Router>
      <div className="App">
      {/* {isMobile &&  <meta name="viewport" content="width=device-width, initial-scale=0.6, minimum-scale=0.5, maximum-scale=3.0"/>}
      {isTablet &&  <meta name="viewport" content="width=device-width, initial-scale=2.0, minimum-scale=0.5, maximum-scale=3.0"/>}
      {isDesktop &&   <meta name="viewport" content="width=device-width, initial-scale=2.0, minimum-scale=0.5, maximum-scale=3.0"/>} */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
