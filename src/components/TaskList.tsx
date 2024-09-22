import React, { useState } from 'react';
import { Task } from '../types';


// Define the TaskList component props interface
interface TaskListProps {
    tasks: Task[];
    toggleComplete: (id: number) => void;
    deleteTask: (id: number) => void;
    toggleEditTask: (id: number) => void;
    saveTask: (id: number, newText: string) => void;
  }

  const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, deleteTask, toggleEditTask, saveTask }) => {
    const [editText, setEditText] = useState<string>(''); // State for editing task text
   
   
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleComplete(task.id)}
            /> 

            {task.isEditing ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : ( 

            <span style={{ textDecoration: task.isCompleted? 'line-through' : 'none' }}>
                {task.text}
                </span>
             )}
          
             {task.isEditing ? (
               <button onClick={() => saveTask(task.id, editText)}>Save</button>
             ) : (
               <button onClick={() => {
                 toggleEditTask(task.id);
                 setEditText(task.text);  // Set the input field to the current task text when editing starts
               }}>
                 Edit
               </button>
             )}
             
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;