import React, { useState } from 'react';
import '../stylesheets/ListTask.css';
import TaskForm from './TaskForm';
import Task from './Task';

function ListTask(){
  const [tasks, setTask] = useState([]);
  
  const addTask = task => {
    if(task.text.trim()){
      task.text = task.text.trim();
      const taskUpdated = [task, ...tasks];
      setTask(taskUpdated);
    }
  };

  const deleteTask = id => {
    const taskUpdated = tasks.filter(task => task.id !== id);
    setTask(taskUpdated);
  };

  const completeTask = id => {
    const taskUpdated = tasks.map(task => {
        if(task.id === id){
          task.complete = !task.complete;
        }
        return task;
      });
      setTask(taskUpdated);
  };
  return(
      //This a fragment
      <>
        <TaskForm onSubmit={addTask}  />
        <div className='task-list-content'>
          {
            tasks.map((task) =>
              <Task
                key={task.id}
                id={task.id} 
                text={task.text}
                complete={task.complete}
                completeTask={completeTask}
                deleteTask={deleteTask}
              />
            )
          }
        </div>
      </>
    );
        
}

export default ListTask;