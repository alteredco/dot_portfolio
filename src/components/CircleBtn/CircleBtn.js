import React from 'react';
import './CircleBtn.css';

class CircleBtn extends React.Component {
  render() {
    return (
      <div className="circleBtn__container">
        <button className="circleBtn" onClick={this.props.click} > >
        </button>
      </div>
    )
  }
}

export default CircleBtn;