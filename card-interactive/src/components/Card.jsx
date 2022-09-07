import React from "react";
import CardFront from '../images/bg-card-front.png';
import CardBack from '../images/bg-card-back.png';

function Card(){
    return(
        <div>
            <img src={CardFront} />
            <img src={CardBack} className='pl-8 pt-5' />
        </div>
    );
}
export default Card;