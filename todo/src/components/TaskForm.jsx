import React, { useState } from 'react';
import '../stylesheets/TaskForm.css';
import {v4 as uuidv4} from 'uuid';

function TaskForm(props) {

  const [input, setInput] = useState('');

  const contolChange = e => {
    setInput(e.target.value)
  };
  const submit = e => {
    e.preventDefault(); 
    const taskNew = {
      id: uuidv4(),
      text: input,
      complete: false
    }

    props.onSubmit(taskNew);
  };

  return(
    <form
      onSubmit={submit} 
      className='task-form'>
      <input 
        className='task-input'
        type='text'
        placeholder='Write a task'
        name='text'
        onChange={contolChange}
      />
      <button className='task-button'>
        Add task
      </button>
    </form>
  );  
}

export default TaskForm;