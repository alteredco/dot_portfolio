import React from 'react';
import SmallBtn from '../SmallBtn/SmallBtn';
import './SideDrawer.css';

class SideDrawer extends React.Component {
  render() {
    return(
      <nav className="SideDrawer-wrapper">
      <ul className="SideDrawer-list">
      <li className="SideDrawer-listItem">
        <a href="/about">ab<span className="SideDrawer-listDot">o</span>ut</a>
      </li>
      <li className="SideDrawer-listItem">
        <a href="/portfolio">portf<span className="SideDrawer-listDot">o</span>lio</a>
      </li>
      <li className="SideDrawer-listItem">
        <a href="contact">c<span className="SideDrawer-listDot">o</span>ntact</a>
      </li>
    </ul>
    <SmallBtn text="Close" click={this.props.smallBtnClickHandler}/>
  </nav>
    )
  }
}

export default SideDrawer;