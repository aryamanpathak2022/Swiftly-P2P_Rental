"use client"
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const roomName = '1_2'; // Replace with your dynamic room name logic if applicable
const socket = io(`ws://swiftly-p2p-rental.onrender.com/ws/chat/private/${roomName}/`);

export function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Connect to WebSocket
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    // Handle incoming messages from WebSocket server
    socket.on('chat_message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    // Clean up on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== '') {
      socket.emit('send_message', { message: inputMessage });
      setInputMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="bg-background border-b border-muted p-4">
        <div className="flex items-center gap-4">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          <div className="text-lg font-medium">Alice</div>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4 bg-background">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-4 ${msg.senderUsername === 'You' ? 'justify-end' : ''}`}>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>{msg.senderUsername.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className={`bg-card rounded-lg p-3 max-w-[75%] ${msg.senderUsername === 'You' ? 'bg-primary text-primary-foreground' : 'text-card-foreground'}`}>
                <div className="font-medium">{msg.senderUsername}</div>
                <div className="text-sm">{msg.message}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-background border-t border-muted p-4">
        <div className="flex items-center gap-2">
          <Textarea
            placeholder="Type your message..."
            className="flex-1 resize-none rounded-lg p-2 border border-muted focus:border-primary focus:ring-0"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <Button onClick={sendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
}
