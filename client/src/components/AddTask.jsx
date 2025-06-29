// src/components/AddTask.jsx
import React, { useState } from "react";
import axios from "axios";

const AddTask = ({ fetchTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await axios.post("http://localhost:5000/api/tasks", {
        title,
        description,
      });
      setTitle("");
      setDescription("");
      fetchTasks(); // refresh task list
    } catch (err) {
      console.error("Error adding task:", err.message);
    }
  };

  return (
    <form onSubmit={handleAddTask} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
