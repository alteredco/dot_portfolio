import React from 'react';
import './Title.css';

class Title extends React.Component {
  render() {
    return (
      <div className="title">
<h1 className="firstname">{this.props.header1}</h1><h1 className="lastname">{this.props.header2}</h1>
      </div>
    )
  }
}

export default Title;