import React, { useState, useEffect } from 'react';
import Sidebar from '../Components/Sidebar';
import './AccountPage.css'; // Import CSS file

function AccountPage() {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('New York, USA');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setName(user.username);
      setEmail(user.email);
    }
  }, []);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSave = () => {
    // Save the edited values
    setEditing(false);
    // You can implement the logic to save these values to the server here
    const updatedUser = { name, email, address };
    localStorage.setItem('user', JSON.stringify(updatedUser));
  };

  return (
    <div className="account-page">
      <Sidebar name={name} location={address} />
      <div className="account-info">
        <h2 style={{fontSize:'50px', border:'black', textDecoration: 'underline'}}>Account Information</h2>
    
        {editing ? (
          <div>
            <div className="input-field">
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="input-field">
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-field">
              <label>Address:</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <button className="save-button" onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div>
            <div className="info-field">
              <span className="field-name">Name:</span>
              <span>{name}</span>
            </div>
            <div className="info-field">
              <span className="field-name">Email:</span>
              <span>{email}</span>
            </div>
            <div className="info-field">
              <span className="field-name">Address:</span>
              <span>{address}</span>
            </div>
            <button className="edit-button" onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountPage;
