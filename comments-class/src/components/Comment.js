import React from "react";
import '../stylesheets/Comment.css'

class Comment extends React.Component{
  render(){
    return(
      <div className='comment-content rounded-lg'>
          <img 
            className='comment-img rounded-l-lg'
            src={require(`../img/comment-${this.props.img}.png`)}
            alt={`Photo ${this.props.name}`} />
       
        <div className='text-content-comment'>
            <p className='name-comment'>
              <strong>{this.props.name}</strong>in {this.props.country}
            </p>
            <p className='rol-comment'>
              {this.props.rol} at <strong>{this.props.company}</strong>
            </p>
            <p className="text-comment">"{this.props.comment}"</p>
          </div>
      </div>
    );
  }
}
export default Comment;