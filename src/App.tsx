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
      isCompleted: false,
      isEditing: false,
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

  const toggleEditTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, isEditing: !task.isEditing } : task
    ));
  };

  const saveTask = (id: number, newText: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText, isEditing: false } : task
    ));
  };

  return (
    <div>
      <h1>Personal Task Tracker</h1>
      <AddTaskForm addTask={addTask} />
      <TaskList 
      tasks={tasks}
      toggleComplete={toggleComplete} 
      deleteTask={deleteTask}
      toggleEditTask={toggleEditTask} 
      saveTask={saveTask} // Pass the saveTask function to TaskList for editing tasks. 
      />
    </div>
  );
};

export default App;
