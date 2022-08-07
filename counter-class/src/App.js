import React from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import freeCodeCampLogo from './img/freecodecamp-logo.png';


class App extends React.Component {
  constructor(){
    super();
    this.state = { numClicks: 0 };
    this.controlClick = this.controlClick.bind(this);
    this.resertCounter = this.resertCounter.bind(this);
  }

  controlClick(){
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }

  resertCounter(){
    this.setState({ numClicks: 0 });
  }
  render(){
    return (
      <div className="App">
        <div className='freecodecamp-logo-content'>
          <img
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='freeCodeCamp logo' />
        </div>
        <div className='main-content'>
          <Counter numberClick={this.state.numClicks} />
          <Button 
            text='Click'
            isClickButton={true}
            controlClick={this.controlClick}/>
          <Button 
            text='Reset'
            isClickButton={false}
            controlClick={this.resertCounter}/>
  
        </div>
      </div>
    );
  }
}

export default App;
