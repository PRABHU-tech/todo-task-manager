// src/components/TaskItem.jsx
import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 m-3 w-full sm:w-80 hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{task.title}</h3>
      <p className="text-gray-600 mb-3">{task.description}</p>
      <div className="flex justify-between text-sm text-gray-500">
        <span>Status: {task.completed ? "✅ Done" : "⏳ Pending"}</span>
        <span>{new Date(task.createdAt).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default TaskItem;
