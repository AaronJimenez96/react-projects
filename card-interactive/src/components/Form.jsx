import React from "react";
import "../styles/Form.css";
import { useForm } from "react-hook-form";
import Card from "./Card";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const regex =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

  const handleRegistration = (data) => {
    const objectCopy = Object.assign({}, data);

    if (objectCopy.hasOwnProperty("bank")) {
      return console.log(objectCopy);
    } else {
      objectCopy["bank"] = "Nu";
      return console.log(objectCopy);
    }
  };

  return (
    <div className="flex items-center justify-evenly flex-row-reverse">
      <div>
        <form
          className="flex flex-col space-y-3"
          onSubmit={handleSubmit(handleRegistration)}
        >
          <label className="text-sm text-gray-600">CARDHOLDER NAME</label>
          <input
            type="text"
            placeholder="e.g Aaron Jimenez"
            className={
              errors.name ? "rounded border-rose-500 pl-1" : "rounded pl-1"
            }
            {...register("name", {
              required: true,
              pattern: /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/,
            })}
          />
          {errors.name && (
            <p className="pl-2 text-red-400">Please check the format name</p>
          )}

          <label className="text-sm text-gray-600">CARD NUMBER</label>
          <input
            type="number"
            name="cardholder"
            placeholder="e.g 1234 5678 1234 5678"
            className={
              errors.cardholder
                ? "border-rose-500 rounded pl-1"
                : "rounded pl-1"
            }
            {...register("cardholder", {
              required: true,
              pattern: regex,
            })}
          />
          {errors.cardholder && (
            <p className="pl-2 text-red-400">Don't be blank</p>
          )}

          <div className="flex space-x-8">
            <label className="text-sm text-gray-600">EXT. DATE (MM/YY)</label>
            <label className="text-sm text-gray-600">CVV</label>
          </div>
          <div className="flex space-x-3">
            <input
              type="number"
              name="month"
              placeholder="MM"
              className={
                errors.month
                  ? "border-rose-500 w-20 rounded pl-1"
                  : "w-20 rounded pl-1"
              }
              {...register("month", {
                required: true,
                pattern: /^(0[/?([0-9])$/,
                minLength: 2,
                maxLength: 2,
              })}
            />
            {errors.month && (
              <p className="pl-2 text-red-400">Don't be blank</p>
            )}
            <input
              type="number"
              name="year"
              placeholder="YY"
              className={
                errors.year
                  ? "border-rose-500  w-20 rounded pl-1"
                  : " w-20 rounded pl-1"
              }
              {...register("year", {
                required: true,
                pattern: /^\d{4}$/,
                minLength: 4,
                maxLength: 4,
              })}
            />
            {errors.year && <p className="pl-2 text-red-400">Don't be blank</p>}
            <input
              type="number"
              name="cvv"
              placeholder="CVV"
              className={
                errors.cvv
                  ? "border-rose-500 w-20 rounded pl-1"
                  : "rounded pl-1"
              }
              {...register("cvv", {
                required: true,
                pattern: /^[0-9]{3,4}$/,
                minLength: 3,
                maxLength: 4,
              })}
            />
            {errors.cvv && <p className="pl-2 text-red-400">Don't be blank</p>}
          </div>
          <button
            type="submit"
            className="w-50 mt-5 p-1 bg-violet-900 text-white rounded-lg"
          >
            SAVE
          </button>
        </form>
      </div>
      <div>
        <Card watch={watch} />
      </div>
    </div>
  );
}

export default Form;
