import React from 'react'
import '../styles/Form.css'


function Form({ name }) {
    return (
        <div className='flex flex-col space-y-2'>
            <label>NAME</label>
            <input type='text' placeholder='Your full name' className='rounded pl-1'></input>

            <label>NUMBER</label>
            <input type='text' placeholder='Your full name' className='rounded pl-1'></input>

            <div className='flex space-x-8'>
                <label>EXT. DATE (MM/YY)</label>
                <label>CVV</label>
            </div>
            <div className='flex space-x-3'>
                <input type='text' placeholder='MM' className='w-20 rounded pl-1'></input>
                <input type='text' placeholder='YY' className='w-20 rounded pl-1'></input>
                <input type='text' placeholder='CVV' className='w-20 rounded pl-1'></input>
            </div>
            <button type='submit' className='w-50 mt-4 p-1 bg-violet-900 text-white rounded-lg'>SAVE</button>
        </div>
    );
}

export default Form;