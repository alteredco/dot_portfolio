import React from 'react';
import './SmallBtn.css';

class SmallBtn extends React.Component {
  render() {
    return (
      <div className="smallBtn__container">
        <button className="smallBtn" onClick={this.props.click} >{this.props.text}
        </button>
      </div>
    )
  }
}

export default SmallBtn;