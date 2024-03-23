import React, { useState } from 'react';
import './form.css'
const FormValidation = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted successfully:', formData);
      // Reset form fields after submission
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } else {
      console.log('Form validation failed.');
    }
  };

  const validateForm = () => {
    let valid = true;
    const errors = {};

    // Username validation
    if (!formData.username.trim()) {
      errors.username = 'Username is required';
      valid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
      valid = false;
    }

    // Password validation
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      valid = false;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  return (
    <div className='container-form'>
   

    
      <h2>Form Validation Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br></br>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {formErrors.username && <span className="error">{formErrors.username}</span>}
        </div>
        <div>
          <label>Email:</label><br></br>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div>
          <label>Password:</label><br></br>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>
        <div>
          <label>Confirm Password:</label><br></br>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    
  );
};

export default FormValidation;
