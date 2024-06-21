import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:3000/');
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('connected');
    });

    newSocket.on("welcome", (message) => {
      setMessages((prevMessages) => [...prevMessages, { userId: "Server", message }]);
    });

    newSocket.on("disconnect", (message) => {
        setMessages((prevMessages) => [...prevMessages, { userId: "Server", message }]);
      });

    newSocket.on("message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() && socket) {
      socket.emit("message", input);
      setMessages((prevMessages) => [...prevMessages, { userId: "You", message: input }]);
      setInput('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg h-full flex flex-col">
        <div className="flex-grow mb-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`mb-2 flex ${msg.userId === "You" ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`p-3 rounded-lg max-w-xs ${msg.userId === "You" ? 'bg-blue-800 text-white' : 'bg-gray-700 text-gray-300'}`}>
                <strong className="block">{msg.userId === "You" ? 'You' : "Other"}:</strong> 
                <span>{msg.message}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
            className="flex-grow p-3 border border-gray-600 bg-gray-700 text-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            className="px-4 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;




// import React, { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     const newSocket = io('http://localhost:3000/');
//     setSocket(newSocket);

//     newSocket.on('connect', () => {
//       console.log('connected');
//     });

//     newSocket.on("welcome", (message) => {
//       setMessages((prevMessages) => [...prevMessages, { userId: "Server", message }]);
//     });

//     newSocket.on("message", (msg) => {
//       setMessages((prevMessages) => [...prevMessages, msg]);
//     });

//     return () => {
//       newSocket.disconnect();
//     };
//   }, []);

//   const sendMessage = () => {
//     if (input.trim() && socket) {
//       socket.emit("message", input);
//       setInput('');
//     }
//   };

//   return (
//     <div>
//       <div style={{ marginBottom: '20px' }}>
//         {messages.map((msg, index) => (
//           <div key={index} >
//             <strong>{msg.userId}:</strong> {msg.message}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
//         style={{ marginRight: '10px' }}
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default App;
