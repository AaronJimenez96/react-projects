import React from "react";
import '../stylesheets/Comment.css'

function Comment(props) {
  return(
    <div className='comment-content rounded-lg'>
    
        <img 
          className='comment-img rounded-l-lg'
          src={require(`../img/comment-${props.img}.png`)}
          alt="`Photo about"/>
     
      <div className='text-content-comment'>
          <p className='name-comment'>
            <strong>{props.name}</strong>in {props.country}
          </p>
          <p className='rol-comment'>
            {props.rol} at <strong>{props.company}</strong>
          </p>
          <p className="text-comment">"{props.comment}"</p>
        </div>
    </div>
  );
}
export default Comment;