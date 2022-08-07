import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import {useState} from 'react';

function App() {
  const [numClicks, setNumClick] = useState(0); 
  
  const controlClick = () => {
    setNumClick( numClicks + 1 );
  };

  const resertCounter = () => {
    setNumClick(0);
  };
  return (
    <div className="App">
      <div className='freecodecamp-logo-content'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='freeCodeCamp logo' />
      </div>
      <div className='main-content'>
        <Counter numberClick={numClicks} />
        <Button 
          text='Click'
          isClickButton={true}
          controlClick={controlClick}/>
        <Button 
          text='Reset'
          isClickButton={false}
          controlClick={resertCounter}/>

      </div>
    </div>
  );
}

export default App;
