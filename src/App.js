import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import LandingPage from './components/LandingPage';
import Request from './components/Request';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/logout';
import {
  isMobile,
  isTablet,
  isDesktop,
} from 'react-device-detect';




function App() {
  return (
 
/* <Route element={<ProtectedRoute />}>
      <Route path="/landing-page" element={<LandingPage />} />
    </Route>*/


<AuthProvider>
<BrowserRouter>
  <Routes>
    <Route path="/*" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/logout" element={<Logout />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/landing-page" element={<LandingPage />} />
            <Route path="/request" element={<Request />} />
          </Route>    
  </Routes>
  
</BrowserRouter>

</AuthProvider>





  );
}

export default App;
