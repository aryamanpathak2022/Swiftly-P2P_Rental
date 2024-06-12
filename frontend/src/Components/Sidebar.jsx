import React from 'react';
import './Sidebar.css';

const Sidebar = ({ name, location }) => {
  return (
    <div className="sidebar-container">
        <h2 className='comp_name'>Swiftly</h2>
      <div className="header">
        
        <div className="profile-pic"></div>
        <h1 className="name">{name}</h1>
        <p className="location">{location}</p>
      </div>
      <div className="nav-buttons">
        <button className="nav-button">Dashboard</button>
        <button className="nav-button">Lent Items</button>
        <button className="nav-button">Account</button>
      </div>
      <button className="nav-button logout-button">Log Out</button>
    </div>
  );
};

export default Sidebar;
