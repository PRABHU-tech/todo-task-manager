// src/components/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskItem from "./TaskItem";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/tasks")
      .then(res => setTasks(res.data))
      .catch(err => console.error("Error fetching tasks:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📋 My Tasks</h1>
      <div className="flex flex-wrap justify-center">
        {tasks.length > 0 ? (
          tasks.map(task => (
            <TaskItem key={task._id} task={task} />
          ))
        ) : (
          <p className="text-gray-600 text-center">No tasks available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
