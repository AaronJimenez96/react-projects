import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ButtonClear from './components/ButtonClear';
import Logo from './components/Logo';

function App() {

  const [input, setInput] = useState('');

  const addInput = (value) => {
    
    if(!(input + value).endsWith('/0')){
      setInput(input + value);
    } else{
      alert('Please enter a valid operation');
    }
  };

  const calculateResult = () => {
    
    if(input){
      setInput(evaluate(input));
    } else{
      alert('Please enter a valid operation');
    }
  };
  return (
    <div className="App">
      <Logo />
      <div className='calculator-content'>
        <Input input={input}/>
        <div className='row'>
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className='row'>
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className='row'>
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className='row'>
          <ButtonClear handleClear={() => setInput('')}>Clear</ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
