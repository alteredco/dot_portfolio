import React from 'react';
import './CircleBtn.css';

class CircleBtn extends React.Component {
  render() {
    return (
      <div className="circleBtn__container">
        <button className="circleBtn" onClick={this.props.click} > {this.props.text}
        </button>
      </div>
    )
  }
}

export default CircleBtn;