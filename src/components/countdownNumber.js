import React, { useEffect } from 'react';
import './countdownNumber.css';

// TODO




const CountdownNumber = (props) => {

  return (
    <div className="countdown-number">
      {props.digit || 0}
    </div>
  )
}

export default CountdownNumber;
