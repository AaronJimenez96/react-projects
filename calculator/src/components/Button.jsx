import React from 'react';
import '../stylesheets/Button.css';
function Button(props){
  
  const isOperator = value =>{
    return isNaN(value) && (value !== '.') && (value !== '=');
  };
  return(
    <button 
      className={`button-content ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}>
       {props.children} 
    </button>
  );
}

export default Button;