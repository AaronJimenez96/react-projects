import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-content'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo' 
        />
      </div>
      <div className='task-list-main'>
        <h1>My todo list</h1>
        <ListTask />
      </div>
    </div>
  );
}

export default App;
