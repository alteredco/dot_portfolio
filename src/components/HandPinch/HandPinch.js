import React from 'react';
import hand from '/Users/dash2/Desktop/dot-portfolio-app/src/assets/handPinch.svg';
import './HandPinch.css';

class HandPinch extends React.Component {
  render() {
    return(
      <div className="hand__container">
        <img src={hand} className="hand" alt="hand" />
      </div>
    );
  }
}

export default HandPinch;