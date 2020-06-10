import React from 'react';
import './HandPinch.css';
import HandSvg2 from '../HandSvg2/HandSvg2';
import HandSvg1 from '../HandSvg1/HandSvg1';

const HandPinch =(props)=> {
  return(
      <div className="hand__container">
        {props.hover?<HandSvg2 />:<HandSvg1/>}
      </div>
   );
  }

export default HandPinch;