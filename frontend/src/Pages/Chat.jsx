import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Chat.css';

const Chat = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [noUserFoundMessage, setNoUserFoundMessage] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.error('Access token not found in localStorage.');
        setErrorMessage('Access token not found. Please log in.');
        return;
      }

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      };

      const response = await axios.post('http://127.0.0.1:8000/swiftly/search/', { username: searchTerm }, config);
      
      if (response.data.users.length === 0) {
        setNoUserFoundMessage('No user found.');
      } else {
        setNoUserFoundMessage('');
      }

      setSearchResults(response.data.users);
      setErrorMessage(''); // Clear any previous errors
    } catch (error) {
      console.error('Error searching users:', error);
      setErrorMessage('Error searching users. Please try again later.');
    }
  };

  const redirectToChat = (userId) => {
    const currentUserId = getCurrentUserId(); // Implement your logic to get current user ID
    const roomName = currentUserId < userId ? `${currentUserId}_${userId}` : `${userId}_${currentUserId}`;
    navigate(`/chatPage/${roomName}`);
  };

  const getCurrentUserId = () => {
    // Implement your logic to get current user ID (could be from localStorage or context)
    return 1; // Replace with actual current user ID retrieval logic
  };

  return (
    <div className="chat-container">
      <TextField
        label="Search Users"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {noUserFoundMessage && <div className="no-user-message">{noUserFoundMessage}</div>}
      <div className="search-results">
        {searchResults.map((user) => (
          <div key={user.id} className="user-item" onClick={() => redirectToChat(user.id)}>
            {user.username}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
