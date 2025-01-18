import React, { useState,useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const JoinRoomForm = ({ joinRoom }) => {
  const [roomId, setRoomId] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    joinRoom(roomId, username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Room ID"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Join Room</button>
    </form>
  );
};

const ChatRoom = ({ roomId, username }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.emit('joinRoom', { roomId, username });

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off();
    };
  }, [roomId, username]);

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('message', { roomId, message });
    setMessage('');
  };

  return (
    <div>
      <h2>Room: {roomId}</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};


function App() {
  const [roomId, setRoomId] = useState(null);
  const [username, setUsername] = useState(null);

  const joinRoom = (roomId, username) => {
    setRoomId(roomId);
    setUsername(username);
  };

  return (
    <div>
      {!roomId || !username ? (
        <JoinRoomForm joinRoom={joinRoom} />
      ) : (
        <ChatRoom roomId={roomId} username={username} />
      )}
    </div>
  );
}

export default App;
