import React, { useState } from 'react';
import './Chatinside.css'; // Import your CSS file for styling

const ChatInside = ({ personName }) => {
    // Sample data for demonstration
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hey there!', sender: 'John Doe', timestamp: '10:00 AM' },
        { id: 2, text: 'Hi! How are you?', sender: 'You', timestamp: '10:05 AM' },
        { id: 3, text: 'I am doing well, thank you!', sender: 'John Doe', timestamp: '10:10 AM' },
        // Add more sample data as needed
    ]);

    const handleSendMessage = (message) => {
        // Logic to send message
    };

    return (
        <div className="chat-inside-container">
            <div className="chat-header">John Wick</div>
            <div className="chat-messages">
                {messages.map(message => (
                    <div key={message.id} className={`message ${message.sender === 'You' ? 'sent' : 'received'}`}>
                        <div className="message-text">{message.text}</div>
                        <div className="message-timestamp">{message.timestamp}</div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type your message..." />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatInside;
