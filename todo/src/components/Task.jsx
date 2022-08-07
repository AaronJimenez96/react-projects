import '../stylesheets/Task.css';
import {AiOutlineCloseCircle} from 'react-icons/ai';
function Task({ id, text, complete, completeTask, deleteTask }) {
  return(
    <div className={complete ? 'task-content complete' : 'task-content'}>
      <div 
        onClick={() => completeTask(id)}
        className='task-text'>
        {text}
      </div>
      <div
        onClick={() => deleteTask(id)} 
        className='task-content-icons'>
        <AiOutlineCloseCircle className='task-icon'/>
      </div>
    </div>
  );  
}

export default Task;