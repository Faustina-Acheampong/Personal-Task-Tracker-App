import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import { Task } from './types';


const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: Date.now(), // Unique ID based on timestamp
      text: taskText,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleComplete = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div>
      <h1>Personal Task Tracker</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleComplete={toggleComplete} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
