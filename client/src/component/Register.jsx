import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Redux/Auth/UserSlice';
import "../assets/css/Register.css";
import { useNavigate, Link } from 'react-router-dom';


const Register = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: '',
    rememberMe: false
});

const [errors, setErrors] = useState({
  passwordMismatch: false,
});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrors({
        ...errors,
        passwordMismatch: true,
      });
    } else {
      setErrors({
        ...errors,
        passwordMismatch: false,
      });
    dispatch(registerUser(formData));
    navigate("/login")
  }
};

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="number">Number</label>
            <input type="text" id="number" name="number" value={formData.number} onChange={handleChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          {/* <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="" disabled>Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div> */}
          <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        {errors.passwordMismatch && <p className="error-register">Passwords do not match</p>}
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>
              <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} />
            Accept the terms and Privacy Policy
            </label>
          </div>
        </div>
        <button type="submit" className="register-submit-button" disabled={loading}>
          {loading ? 'Registering...' : 'Register Now'}
        </button>
        {error && <p className="error">{error}</p>}
        <p className="login-redirect">
          Already have an account? <Link to="/login" className="login-link">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
