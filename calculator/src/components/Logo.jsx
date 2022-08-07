import React from 'react';
import freeCodeCampLogo from '../img/freecodecamp-logo.png';
import '../stylesheets/Logo.css'

function Logo(){
    return(
        <div className='freeocodecamp-logo-content'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='freeCodeCamp logo' /> 
      </div>
    );
}

export default Logo;