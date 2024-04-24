import React,{useEffect} from 'react';
import './App.css';
import './HeroSection.css';
import { Link, useNavigate } from 'react-router-dom';

const HeroSection= () => {
  const navigate = useNavigate()
  useEffect(() => {
    // Check if the token is present in local storage
    const token = localStorage.getItem('token');
    const user= localStorage.getItem('user');
    const userInfo =  JSON.parse(user)
   


    // If the token is present, you can perform additional validation if needed
    // For simplicity, we'll just check if the token exists for now
    if (token && userInfo?.role==='admin') {
      
      navigate('/AdminDashboard');
    }else if (token && userInfo?.role!=='admin') {
      navigate('/UserDashboard')
    } else{
      navigate('/')

    }
  }, []);
  return (
    <div className='hero-container'>
    <video src='/videos/video-1.mp4' autoPlay loop muted />
    <h1>FAKE NEWS DETECTION</h1>
    <p>What are you waiting for?</p>
    <div className='hero-btns'>
      <Link to='/Login' className='btns btn--outline btn--large'>
       LOGIN TO GET STARTED
      </Link>
      
    </div>
  </div>
  );
}

export default HeroSection;