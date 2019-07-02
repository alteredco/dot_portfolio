import React from 'react';
import './Backdrop.css';

const Backdrop = props => (
  <div className="Backdrop-wrapper"onClick={props.click}/>
)

export default Backdrop;