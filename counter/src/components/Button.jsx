import React from 'react';
import '../stylesheets/Button.css';
function Button({ text, isClickButton , controlClick }){
  return(
    <button
      className={ isClickButton ? 'click-button' : 'reset-button' }
      onClick={controlClick}>
      {text}
    </button>
  );
}

export default Button;