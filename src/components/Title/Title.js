import React from 'react';
import './Title.css';

const Title=(props)=> {
  return (
    <main>
      <title className="title">
        <h1 className="firstname">{props.header1}</h1>
        <h1 className="lastname">{props.header2}</h1>
      </title>
      <h2 className="sub">{props.sub}</h2>
    </main>
    )
  }

export default Title;