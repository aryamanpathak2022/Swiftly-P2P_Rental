import React from 'react';
import './Sidebar.css';


// set location from the local storage user.location


const Sidebar = ({location }) => {

// set name from the local storage user.username

const name=localStorage.getItem('user');
const username=name.split('"')[5];


  return (
    <div className="sidebar-container">
        <h2 className='comp_name'>Swiftly</h2>
      <div className="header">
        
        <div className="profile-pic"></div>
        <h1 className="name">{username}</h1>
        <p className="location">{location}</p>
      </div>
      <div className="nav-buttons">
        <button className="nav-button">Account</button>
        <button className="nav-button">Items Rented</button>
        <button className="nav-button">Lent new items</button>
        <button className="nav-button">Item Lented</button>
        <button className="nav-button">Help & Support</button>
        <button className="nav-button logout-button">Log Out</button>

        
      </div>
    </div>
  );
};

export default Sidebar;
