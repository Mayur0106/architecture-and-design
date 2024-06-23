import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Import the CSS file for styles

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    phone_number: '',
    address: '',
    email: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://architecture-and-design.onrender.com/api/auth/createCard', formData);
      setSuccessMessage('Details saved successfully!');
      setFormData({
        name: '',
        phone_number: '',
        address: '',
        email: ''
      });

      setTimeout(() => {
        setSuccessMessage('');
      }, 15000);
    } catch (error) {
      setSuccessMessage('Failed');
      console.error('Error uploading data:', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Upload Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="input-field" />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} className="input-field" />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} className="input-field" />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} className="input-field" />
        </label>
        <div className="submit-button-container">
          <button type="submit" className="submit-button">Upload</button>
        </div>
        {successMessage && (
          <div className="success-message">
            {successMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default Form;
