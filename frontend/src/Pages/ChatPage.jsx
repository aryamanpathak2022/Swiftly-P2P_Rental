import React, { useEffect, useState } from 'react';
import WebSocketInstance from '../websockets/websocketService';
import { useParams } from 'react-router-dom';
import './ChatPage.css';  // Make sure to import the CSS file

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const { roomName } = useParams();
    const username = JSON.parse(localStorage.getItem('user'))?.username;

    useEffect(() => {
        console.log("Connecting to WebSocket...");
        WebSocketInstance.connect(roomName);

        WebSocketInstance.addCallbacks(
            (data) => {
                console.log("Message received: ", data);
                setMessages((prevMessages) => [...prevMessages, data.message]);
            },
            (data) => {
                console.log("Chat history received: ", data);
                setMessages(data.history);
            }
        );

        return () => {
            console.log("Disconnecting from WebSocket...");
            WebSocketInstance.disconnect();
        };
    }, [roomName]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (!username) {
            console.error("Username not found in localStorage");
            return;
        }
        WebSocketInstance.sendMessage({ message, senderUsername: username });
        setMessage('');
    };

    return (
        <div className="chat-page-container">
            <div className="chat-header">
                <h2 className="chat-room-name">Room: {roomName}</h2>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.senderUsername === username ? 'my-message' : 'other-message'}`}>
                        <strong>{msg.senderUsername}</strong>: {msg}
                    </div>
                ))}
            </div>
            <form className="chat-form" onSubmit={sendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="chat-input"
                    placeholder="Type your message..."
                    required
                />
                <button type="submit" className="chat-button">Send</button>
            </form>
        </div>
    );
};

export default ChatPage;
