import React from 'react';
import SmallBtn from '../SmallBtn/SmallBtn';
import './SideDrawer.css';

const SideDrawer=(props)=> {
  return(
      <nav className="SideDrawer-wrapper">
      <ul className="SideDrawer-list">
      <li className="SideDrawer-listItem">
        <a href="/">h<span className="SideDrawer-listDot">o</span>me</a>
      </li>
      <li className="SideDrawer-listItem">
        <a href="/about">ab<span className="SideDrawer-listDot">o</span>ut</a>
      </li>
      <li className="SideDrawer-listItem">
        <a href="/projects">pr<span className="SideDrawer-listDot">o</span>jects</a>
      </li>
      <li className="SideDrawer-listItem">
        <a href="contact">c<span className="SideDrawer-listDot">o</span>ntact</a>
      </li>
    </ul>
    <SmallBtn text="Close" click={props.smallBtnClickHandler}/>
  </nav>
    )
  }

export default SideDrawer;