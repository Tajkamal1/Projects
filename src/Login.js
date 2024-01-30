// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      console.log('Login successful:', response.data);
      navigate('/Face');
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="home">
      <nav className="navbar">
        <img id="icon" src={`${process.env.PUBLIC_URL}/icon.svg`} alt="Icon" />
        <Link id="app" to="/Home">
          Blogger App
        </Link>
        <Link id="login" className="bn1" to="/SignUp">
          Sign-up
        </Link>
      </nav>
      <div className="container">
        <div className="right-image-container">
          <div className="background-image"></div>
        </div>
        <div className="form-container">
          <div className="login-title">Login</div>
          <div className="login-subtitle">
            Login to start managing your blogs!
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              className="input-field"
              placeholder=" Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              className="input-field"
              placeholder=" Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="forgot-password">
              <a href="/ForgetPassword">Forgot password?</a>
            </div>
            <button type="submit" className="bn5">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
