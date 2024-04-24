import React, { useState } from 'react';
import './App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

const HeroSection = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate()
  const handleToggleOptions=()=>{
setShowOptions(!showOptions);

  }

  const handleLogout=()=>{
    localStorage.clear()
    navigate('/login')
    
  }
  return (
    
    <div className='hero-container'>
    <div className="admin-icon">
    <div className="admin-options-icon" onClick={handleToggleOptions}>
          <FontAwesomeIcon icon={faUser} />

          {showOptions && (
          <div className="admin-button">
<button className="logout-button" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
            </div>
    )}
    </div>
    </div>
    
    <video src='/videos/video-1.mp4' autoPlay loop muted />
    <h1>FAKE NEWS DETECTION</h1>
    <p>What are you waiting for?</p>
    <div className='hero-btns'>
      <Link to='/get-started' className='btns btn--outline btn--large'>
        GET STARTED
      </Link>
      <Button
        className='btns'
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        onClick={() => console.log('hey')}
      >
        WATCH TRAILER <i className='far fa-play-circle' />
      </Button>
    </div>
  </div>
  );
}

export default HeroSection;