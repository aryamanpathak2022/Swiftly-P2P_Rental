import React, { useState } from 'react';
import './ChatPage.css'; // Import your CSS file for styling

const ChatPage = () => {
    // Sample data for demonstration
    const [chats, setChats] = useState([
        { id: 1, name: 'John Doe', lastMessage: 'Hey there!', unreadMessages: 2 },
        { id: 2, name: 'Jane Smith', lastMessage: 'How are you?', unreadMessages: 0 },
        { id: 3, name: 'Alice Johnson', lastMessage: 'See you tomorrow!', unreadMessages: 1 },
        // Add more sample data as needed
    ]);

    const handleChatClick = (chatId) => {
        // Logic to handle opening the chat for the selected person
    };

    return (
        <div className="chat-page-container">
            <h1 className='swiftly1'>Swiftly</h1>
            <div className="chat-list-container">
                <h2 className='heading'>Chats</h2>
                <ul className="chat-list">
                    {chats.map(chat => (
                        <li key={chat.id} onClick={() => handleChatClick(chat.id)}>
                            <div className="chat-item">
                                <div className="chat-item-name">{chat.name}</div>
                                <div className="chat-item-message">{chat.lastMessage}</div>
                                {chat.unreadMessages > 0 && <div className="unread-badge">New Messages - {chat.unreadMessages}</div>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
          
        </div>
    );
};

export default ChatPage;
