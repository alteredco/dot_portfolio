import React from 'react';
import './SmallBtn.scss';

const SmallBtn =(props)=> {
  return (
      <div className="smallBtn__container">
        <button className="smallBtn" onClick={props.click} >{props.text}
        </button>
      </div>
    )
  }

export default SmallBtn;