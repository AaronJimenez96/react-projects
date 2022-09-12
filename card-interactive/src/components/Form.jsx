import React from 'react'
import '../styles/Form.css'
import { useState } from 'react';

function Form(props) {
    const [name, setMessage] = useState('');
    const [number, setNumber] = useState('');

  const handleName = event => {
    const result = event.target.value.replace(/[^a-z ]/gi, '');
    setMessage(result);
  };

  const handleCardHolder = event => {
    const result2 =  event.target.valueevent.target.value.replace(/[^0-9]/g, "");
    setNumber(result2);
  }
    return (
        <div >
            <form className='flex flex-col space-y-3'>
                <label className='text-sm text-gray-600'>CARDHOLDER NAME</label>
                <input type='text' name='name' value={name} placeholder='e.g Aaron Jimenez' className='rounded pl-1' onChange={handleName}></input>

                <label className='text-sm text-gray-600'>CARD NUMBER</label>
                <input type='number' name='number' pattern="[0-9]*" value={number} placeholder='e.g 1234 5678 1234 5678' className='rounded pl-1'  onChange={handleCardHolder}></input>

                <div className='flex space-x-8'>
                    <label className='text-sm text-gray-600'>EXT. DATE (MM/YY)</label>
                    <label className='text-sm text-gray-600'>CVV</label>
                </div>
                <div className='flex space-x-3'>
                    <input type='number' placeholder='MM' className='w-20 rounded pl-1'></input>
                    <input type='number' placeholder='YY' className='w-20 rounded pl-1'></input>
                    <input type='number' placeholder='CVV' className='w-20 rounded pl-1'></input>
                </div>
                <button type='submit' className='w-50 mt-5 p-1 bg-violet-900 text-white rounded-lg'>SAVE</button>
            </form>
           
        </div>
    );
}

export default Form;