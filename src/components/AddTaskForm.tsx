import React, { useState } from 'react';

interface AddTaskFormProps {
    addTask: (taskText: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');
      
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (taskText.trim()) {
      addTask(taskText);
      setTaskText(''); // Clear input after submitting
     }
   };
      
    return (
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={taskText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskText(e.target.value)} // Explicitly typing the event
              placeholder="Add a new task"
            />
            <button type="submit">Add Task</button>
        </form>
        );
      };
      
export default AddTaskForm;