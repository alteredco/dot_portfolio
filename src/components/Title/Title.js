import React from 'react';
import './Title.css';

const Title=(props)=> {
  return (
      <div className="title">
        <h1 className="firstname">{props.header1}</h1>
        <h1 className="lastname">{props.header2}</h1>
      </div>
    )
  }

export default Title;