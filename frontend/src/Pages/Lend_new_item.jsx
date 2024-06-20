// Lend_new_item.jsx
import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar';
import axios from 'axios';
import './Lent_new_item.css'; // Import the CSS for styling

const LentNewItem = () => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [perDayRent, setPerDayRent] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePhotoChange = (e) => {

    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
    console.log("hello");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('product_image', photo);
    formData.append('per_day_rent', perDayRent);

    // Log each key-value pair in FormData
    for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }

    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${accessToken}`
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/swiftly/product/', formData, { headers });
      if (response.status === 201) {
        setSuccess('Product added successfully');
        
        setName('');
        setPhoto(null);
        setPerDayRent('');
      }
    } catch (error) {
      setError('Failed to add product');
    }
};

  return (
    <div className="lend-new-item-container">
      <Sidebar />
      <div className="lend-new-item-form-container">
        <h2>Lend a New Item</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo</label>
            <input
              type="file"
              id="photo"
              onChange={handlePhotoChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="perDayRent">Per Day Rent</label>
            <input
              type="number"
              id="perDayRent"
              value={perDayRent}
              onChange={(e) => setPerDayRent(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LentNewItem;
