import React from 'react';
import './CircleBtn.css';
import { Icon } from '../Icon/Icon';

const CircleBtn =(props)=> {
  return (
      <div className="circleBtn__container">
        <button className="circleBtn" onClick={props.click} > <Icon icon={props.icon}/>{props.text}
        </button>
      </div>
    )
  }

  export default CircleBtn;