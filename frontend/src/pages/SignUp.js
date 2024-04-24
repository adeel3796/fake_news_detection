import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import '../../src/App.css';

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    check: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFormErrors = {};

    // Validation logic
    if (!formData.firstName.trim()) {
      newFormErrors.firstName = 'First name is required';
    }else{
      newFormErrors.firstName = 'First name is Done';  
    }
    if (!formData.lastName.trim()) {
      newFormErrors.lastName = 'Last name is required';
    }else{
      newFormErrors.lastName = 'Last name is Done';
      
    }
    if (!formData.email.trim()) {
      newFormErrors.email = 'Email is required';
    }else{
      newFormErrors.email = 'Email is Done';
    
    }
    if (!formData.password.trim()) {
      newFormErrors.password = 'Password is required';
    }else{
      newFormErrors.password='Pasword is Done';
    }

    setFormErrors(newFormErrors);

    // If there are no errors, submit the form
    try {
      const response = await axios.post(
        'http://localhost:4000/api/user/register',
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log(response.data); // Log the response data
      navigate('/login');
      
      if (response.status === 200) {
       } else {
        console.error('Registration failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };
  const handleloginClick = () => {
    // Navigate to the SignUp page when the button is clicked
    navigate('/login');
  };
  console.log(formData);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginRight">
          <div className="loginBox">
            <h2>Registration</h2>
            <p>is here.</p>
            
            <input
              placeholder="First Name"
              className={`loginInput ${formErrors.firstName && 'is-invalid'}`}
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            
            <input
              placeholder="Last Name"
              className={`loginInput ${formErrors.lastName && 'is-invalid'}`}
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            
            <input
              placeholder="Email"
              className={`loginInput ${formErrors.email && 'is-invalid'}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            
            <input
              type="password"
              placeholder="Password"
              className={`loginInput ${formErrors.password && 'is-invalid'}`}
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {formErrors.password && (
            <div className='div-validation'>
            <div className={`${formErrors.firstName.includes('Done') ? 'Valid' : 'Error'}`}>
              <p>{formErrors.firstName}</p>
            </div>
            <div className={`${formErrors.lastName.includes('Done') ? 'Valid' : 'Error'}`}>
              <p>{formErrors.lastName}</p>
            </div>
            <div className={`${formErrors.email.includes('Done') ? 'Valid' : 'Error'}`}>
              <p>{formErrors.email}</p>
            </div>
            <div className={`${formErrors.password.includes('Done') ? 'Valid' : 'Error'}`}>
              <p>{formErrors.password}</p>
            </div>

          </div>
          
            )}
            <div className="flex-box">
            <button
              type="submit"
              className="loginButton"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Sign Up
            </button>
            <button className="loginRegisterButton" onClick={handleloginClick}>Log into Account</button>
            </div>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

