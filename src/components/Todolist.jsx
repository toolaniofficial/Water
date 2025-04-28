import { useState } from 'react';

export default function TodoApp() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">To-Do List</h1>
      <div className="flex space-x-2 mb-4">
        <input 
          className="border p-2 rounded" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a task"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={addTask}>Add</button>
      </div>
      <ul className="space-y-2">
        {tasks.map((t, index) => (
          <li key={index} className="bg-white p-2 rounded shadow">{t}</li>
        ))}
      </ul>
    </div>
  );
}
