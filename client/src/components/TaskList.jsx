import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/tasks')
      .then(res => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status.toLowerCase() === filter;
  });

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div className="task-list-container">
      <h2>Your Tasks</h2>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pending</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
      </div>

      {filteredTasks.length === 0 ? (
        <p>No tasks found for selected filter.</p>
      ) : (
        <ul className="task-list">
          {filteredTasks.map(({ _id, title, status }) => (
            <li key={_id} className={`task-item ${status.toLowerCase()}`}>
              <span className="task-title">{title}</span>
              <span className={`task-status status-${status.toLowerCase()}`}>{status}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
