import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [loggedInUser, setLoggedInUser] = useState<string>('');

  const register = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/', {
        name,
        username,
        password
      });
      setToken(response.data.token);
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering:', error);
      alert('Registration failed!');
    }
  };

  const login = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/', {
        headers: { token }
      });
      setLoggedInUser(response.data);
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Login failed!');
    }
  };

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <h1>Login</h1>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {loggedInUser && <h2>Welcome, {loggedInUser}!</h2>}
    </div>
  );
};

export default App;
