import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../src/App.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a token exists in local storage
    const token = localStorage.getItem('token');
    
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setLoggedIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:4000/api/user/login',
        {
          email: email,
          password: password,
        }
      );
      const { user } = data;

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(user));
      setLoggedIn(true);

      if (user.role === 'admin') {
        navigate('/AdminDashboard');
      } else {
        navigate('/userdashboard');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleCreateAccountClick = () => {
    navigate('/sign-up');
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        
        <div className="loginRight">
          <div className="loginBox">
            {loggedIn ? (
              <>
                <p>You are logged in.</p>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <h2>Login</h2>
                <p>is here.</p>
                <div className="flex-box">
                  <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="loginInput"
                    type="email"
                  />
                
                <input
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="loginInput"
                  type="password"
                />
                </div>
                <span className="loginForgot">Forgot Password?</span>
                <div className="flex-box">
                <button
                  className="loginButton"
                  onClick={handleSubmit}
                  type="submit"
                >
                  Log In
                </button>
                <button
                  className="loginRegisterButton"
                  onClick={handleCreateAccountClick}
                >
                  Create a New Account
                </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
