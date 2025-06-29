import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Todo Manager</h1>
        {user && (
          <div className="user-info">
            <span>Hello, {user.name || user.login}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </div>
        )}
      </header>

      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <TaskList />
      )}
    </div>
  );
}

export default App;
