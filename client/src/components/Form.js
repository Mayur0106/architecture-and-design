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
  const [loading, setLoading] = useState(false); // State for loading spinner

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner

    try {

      const apiUrl = `${process.env.REACT_APP_API_KEY}/api/auth/createCard`;
      const res = await axios.post(apiUrl,formData);

      console.log(res);
        console.log("success");

      setSuccessMessage('Details saved successfully!');
      setFormData({
        name: '',
        phone_number: '',
        address: '',
        email: ''
      });
    } catch (error) {
      setSuccessMessage('Failed');
      console.error('Error uploading data:', error);
    }

    setLoading(false); // Stop loading spinner after API call completes
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); // Adjust timing as per your preference
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
          <button type="submit" className={`submit-button ${loading ? 'opacity-50 pointer-events-none' : ''}`}>
            {loading ? (
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 mx-auto"></div>
            ) : (
              'Upload'
            )}
          </button>
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
