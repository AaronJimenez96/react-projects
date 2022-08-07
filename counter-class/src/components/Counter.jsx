import React from 'react';
import '../stylesheets/Counter.css'

class Counter extends React.Component{
  render(){
    return(
      <div className='counter'>
        {this.props.numberClick}
      </div>
    );
  }
}

export default Counter;