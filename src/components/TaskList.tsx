import React from 'react';
import { Task } from '../types';


// Define the TaskList component props interface
interface TaskListProps {
    tasks: Task[];
    toggleComplete: (id: number) => void;
    deleteTask: (id: number) => void;
  }

  const TaskList: React.FC<TaskListProps> = ({ tasks, toggleComplete, deleteTask }) => {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleComplete(task.id)}
            /> 
            <span style={{ textDecoration: task.isCompleted? 'line-through' : 'none' }}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TaskList;