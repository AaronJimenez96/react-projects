import React from 'react'
import '../styles/Form.css'
import { useState } from 'react'

function Form({ name }) {
    return (
        <div className='space-y-4'>
            <div className='flex justify-center flex-col space-y-1 p-5'>
                <label className='text-sm text-bold text-gray-500'>Cardholder Name</label>
                <input placeholder=' e.g. Jane Appleseed' type='text'>{name}</input>
            </div>
            <div className='flex justify-center flex-col space-y-1 p-5'>
                <label className='text-sm text-bold text-gray-500'>Cardholder Number</label>
                <input placeholder=' e.g. 1234 5678 9123 0000' type='text'>{name}</input>
            </div>
            <div className='flex justify-center flex-col space-y-1 p-5'>
                <div className='flex'>
                    <div>
                        <label className='text-sm text-bold text-gray-500'>Exp. Date (MM/YY)</label>
                        <input placeholder=' e.g. 1234 5678 9123 0000' type='text'>{name}</input>
                    </div>
                    <div>
                        <label className='text-sm text-bold text-gray-500'>Exp. Date (MM/YY)</label>
                        <input placeholder=' e.g. 1234 5678 9123 0000' type='text'>{name}</input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;