import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Adjust the URL if your server is running elsewhere

const RealTimeTextBox = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    // Listen for incoming messages
    socket.on('text', (message) => {
      setText(message);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('text');
    };
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);

    // Emit the text to the server
    socket.emit('text', value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type here..."
        rows={10}
        cols={50}
      />
    </div>
  );
};

export default RealTimeTextBox;
