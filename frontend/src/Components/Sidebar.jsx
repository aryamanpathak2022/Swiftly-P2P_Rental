import React from 'react';
import './Sidebar.css';
// import link
import { Link } from 'react-router-dom';


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
        <Link to ="/AccountPage" className="nav-button">
          Account</Link>

        <Link to = "/Lend_new_item" className="nav-button">Items Rented</Link>
        <Link to = "/account" className="nav-button">Lent new items</Link>
        <Link to = "/account"  className="nav-button">Item Lented</Link>
        <Link to = "/account" className="nav-button">Help & Support</Link>
        <Link to = "/account" className="nav-button logout-Link">Log Out</Link>

        
      </div>
    </div>
  );
};

export default Sidebar;
