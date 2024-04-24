import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import UserDashboard from './userdashboard';
import GetStarted from './pages/GetSarted'; // Import the new component
import { AuthProvider } from './AuthContext';  // Import AuthProvider

function App() {
  return (
    <>
      <Router>
        <AuthProvider> {/* Wrap the entire application with AuthProvider */}
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route path="/get-started" element={<GetStarted />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
