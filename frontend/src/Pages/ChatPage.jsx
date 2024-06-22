import React, { useEffect, useState } from 'react';
import WebSocketInstance from '../websockets/websocketService';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const { roomName } = useParams();

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
        const username = JSON.parse(localStorage.getItem('user'))?.username;
        if (!username) {
            console.error("Username not found in localStorage");
            return;
        }
        WebSocketInstance.sendMessage({ message, senderUsername: username });
        setMessage('');
    };

    return (
        <div>
            <h2>ChatPage Room {roomName}</h2>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.senderUsername}</strong>: {msg}
                    </div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatPage;
