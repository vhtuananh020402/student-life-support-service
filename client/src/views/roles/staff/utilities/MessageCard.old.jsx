import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';``
import axios from 'axios';
import { TextField, Button, List, ListItem, Box, Typography, MenuItem, IconButton, ListItemText, Grid  } from '@mui/material';
import { styled } from '@mui/system';

import axiosInstance from 'api/axiosInstance';

const socket = io('http://localhost:3000');

const ChatBubble = styled(Box)(({ isUser }) => ({
    maxWidth: '60%',
    padding: '10px 15px',
    borderRadius: '15px',
    marginBottom: '10px',
    backgroundColor: isUser ? '#ADD8E6' : '#f0f0f0', // Light blue for the user, light grey for others
    alignSelf: isUser ? 'flex-end' : 'flex-start',
    color: isUser ? 'black' : 'black',
    position: 'relative',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        [isUser ? 'right' : 'left']: '-10px',
        width: 0,
        height: 0,
        border: `10px solid transparent`,
        borderTopColor: isUser ? '#ADD8E6' : '#f0f0f0',
        [isUser ? 'borderRight' : 'borderLeft']: 'none',
        [isUser ? 'borderBottomRightRadius' : 'borderBottomLeftRadius']: '5px',
    },
}));

function MessageCard() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const [conversationId, setConversationId] = useState(3); // Assuming one conversation
    const [senderId, setSenderId] = useState(1); // Hardcoded sender id for demo purposes
    const [senderFullName, setSenderFullName] = useState('John Doe'); // Hardcoded sender name for demo purposes

    useEffect(() => {
        socket.emit('join_conversation', conversationId);

        // Fetch previous messages
        axiosInstance.get(`/api/v1/messages/${conversationId}`)
            .then(res => setMessages(res.data))
            .catch(err => {
                console.error(err)
                setMessages([]);});

        socket.on('receive_message', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        return () => {
            socket.off('receive_message');
        };
    }, [conversationId]);

    // Set the conversation id to the selected value in the drop down box
    const setConversation = (e) => {
        setConversationId(e.target.value);
        // console.log(e.target.value);
    };

    // useEffect(() => {
    //     axiosInstance.get(`/api/v1/users/${localStorage.getItem('username')}`)
    //         .then(res => setSenderId(res.data.id))
    //         .catch(err => console.error(err));

        
    // });


    const sendMessage = () => {
        if (message.trim()) {
            socket.emit('send_message', {
                ticket_id: conversationId,
                sender_id: senderId,
                sender_fullname: senderFullName,
                message_details: message,
            });
            setMessage('');
        }
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '80vh',
            padding: '20px',
            backgroundColor: '#f5f5f5',
        }}>
            {/* Chat Messages */}
            
            {/* Make a title for displaying chat id */}
            {/* <Typography variant="h3" style={{ marginBottom: '10px', marginLeft: '10px' }}>
                Ticket #{conversationId} conversation
            </Typography> */}
            {/* Add a Material Drop down box to select the conversation id */}
            <TextField
                select
                label="Select Conversation ID"
                value={conversationId}
                onChange={setConversation}
                variant="outlined"
                style={{ marginBottom: '20px' }}
            >
                {/* use MenuItems */}
                <MenuItem value={1}>#1</MenuItem>
                <MenuItem value={2}>#2</MenuItem>
                <MenuItem value={3}>#3</MenuItem>

            </TextField>


            <List style={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
                padding: '10px',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            }}>
                {messages.map((msg) => (
                    <ListItem
                        key={msg.id}
                        style={{ display: 'flex', justifyContent: msg.sender_id === senderId ? 'flex-end' : 'flex-start' }}
                    >
                        <ChatBubble isUser={msg.sender_id === senderId}>
                            <Typography>{msg.message_details}</Typography>
                            <Typography variant="caption" style={{ display: 'block', marginTop: '8px', color: '#888' }}>
                                Sender ID: {msg.sender_id}
                                
                            </Typography>
                            <Typography variant="caption" style={{ display: 'block', color: '#888' }}>
                                {new Date(msg.created_date).toLocaleString()}
                            </Typography>
                        </ChatBubble>
                    </ListItem>
                ))}
            </List>

            {/* Input Field */}
            <TextField
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message"
                variant="outlined"
                style={{ marginTop: '20px' }}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />

            {/* Send Button */}
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={sendMessage}
                style={{ marginTop: '10px' }}
            >
                Send
            </Button>
        </div>
    );
}

export default MessageCard;
