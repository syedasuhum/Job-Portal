import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import "../assets/css/Login.css";
import { loginUser } from '../Redux/Auth/UserSlice';
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const dispatch = useDispatch();
const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginUser(formData));
      alert("Login Succesfull")
      navigate("/")
    } catch (error) {
      console.error('Login error:', error);
      alert('Login error:', error)
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
        <p className="sign-redirect">
        Not Registered? <Link to="/register" className="sign-link">Signup</Link>
      </p>
      </form>
    </div>
  );
};

export default Login;
