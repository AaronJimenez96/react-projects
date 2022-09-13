import React from 'react'
import '../styles/Form.css'
import { useForm } from "react-hook-form";

function Form(props) {
    const {register, handleSubmit, errors} = useForm();

// const handleName = event => {
//     const dataName = event.target.value.replace(/[^a-z ]/gi, '');
//     setMessage(dataName);
// };

// const handleCardHolder = event => {
//     const cardNumber =  event.target.value.replace(/[^0-9]/g, "");
//     const cardMonth =  event.target.value.replace(/[^0-9]/g, "");
//     setNumber(cardNumber);
//     setMonth(cardMonth);
// }
  const onSubmit = (data) => {};
    return (
        <div >
            <form className='flex flex-col space-y-3' onSubmit={handleSubmit(onSubmit)}>
                <label className='text-sm text-gray-600'>CARDHOLDER NAME</label>
                <input type='text' name='name'  placeholder='e.g Aaron Jimenez' className='rounded pl-1' ref={register({required : true})}/>
                {errors.name && errors.name.type === "required" && (<p className='error'>Name is required</p>)}

                <label className='text-sm text-gray-600'>CARD NUMBER</label>
                <input type='text' name='cardholder'  placeholder='e.g 1234 5678 1234 5678' className='rounded pl-1' ref={register({required : true})}/>
                {errors.cardholder && errors.cardholder.type === "required" && (<p className='error'>cardholder is required</p>)}

                <div className='flex space-x-8'>
                    <label className='text-sm text-gray-600'>EXT. DATE (MM/YY)</label>
                    <label className='text-sm text-gray-600'>CVV</label>
                </div>
                <div className='flex space-x-3'>
                    <input type='text' name='month' placeholder='MM' className='w-20 rounded pl-1' ref={register({required : true})}/>
                     {errors.month && errors.month.type === "required" && (<p className='error'>month is required</p>)}
                    <input type='text' name='year' placeholder='YY' className='w-20 rounded pl-1' ref={register({required : true})}/>
                    {errors.year && errors.year.type === "required" && (<p className='error'>year is required</p>)}
                    <input type='text' name='cvv' placeholder='CVV' className='w-20 rounded pl-1' ref={register({required : true})}/>
                    {errors.cvv && errors.cvv.type === "required" && (<p className='error'>CVV is required</p>)}
                </div>
                <button type='submit' className='w-50 mt-5 p-1 bg-violet-900 text-white rounded-lg'>SAVE</button>
            </form>
           
        </div>
    );
}

export default Form;
