import React from 'react';
import './FeatureImg.css';

class FeatureImg extends React.Component {
  render() {
    return (
      <div className="FeatureImg__container">
        <img className="FeatureImg" src={this.props.url} alt={this.props.title}/>
      </div>
    )
  }
}

export default FeatureImg;