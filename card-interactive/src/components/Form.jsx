import React from 'react'
import '../styles/Form.css'
import { useState } from 'react';

function Form() {
    const [input, getInput] = useState('');

    const getValue = e => {
        console.log(e.target.value);
        getInput(e.target.value);
    }

    const submitData = () => {
        console.log('Event submit')
    }
    
    return (
        <div >
            <form className='flex flex-col space-y-3' onSubmit={submitData}>
                <label className='text-sm text-gray-600'>CARDHOLDER NAME</label>
                <input type='text' name='name' placeholder='e.g Aaron Jimenez' className='rounded pl-1' onChange={getValue}></input>

                <label className='text-sm text-gray-600'>CARD NUMBER</label>
                <input type='text'  placeholder='e.g 1234 5678 1234 5678' className='rounded pl-1'  onChange={getValue}></input>

                <div className='flex space-x-8'>
                    <label className='text-sm text-gray-600'>EXT. DATE (MM/YY)</label>
                    <label className='text-sm text-gray-600'>CVV</label>
                </div>
                <div className='flex space-x-3'>
                    <input type='number' placeholder='MM' className='w-20 rounded pl-1'  onChange={getValue}></input>
                    <input type='number' placeholder='YY' className='w-20 rounded pl-1'  onChange={getValue}></input>
                    <input type='number' placeholder='CVV' className='w-20 rounded pl-1'  onChange={getValue}></input>
                </div>
                <button type='submit' className='w-50 mt-5 p-1 bg-violet-900 text-white rounded-lg' onClick={submitData}>SAVE</button>
            </form>
           
        </div>
    );
}

export default Form;