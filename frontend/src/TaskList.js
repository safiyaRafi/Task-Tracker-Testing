import React, { useEffect, useState } from "react";
import { getTasks, createTask } from "./api";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    // Load tasks when component mounts
    getTasks()
      .then((res) => setTasks(res.data))
      .catch(() => setTasks([])); // safe fallback
  }, []);

  const addTask = async () => {
    if (!title) return;
    const res = await createTask(title);
    setTasks([...tasks, res.data]);
    setTitle("");
  };

  return (
    <div>
      <h2>Task Tracker</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
