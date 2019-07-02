import React from 'react';
import './SideDrawer.css';

const SideDrawer = props => (
  <nav className="SideDrawer-wrapper">
    <ul className="SideDrawer-list">
    <li className="SideDrawer-listItem"><a href="/new" className="grey-text text-darken-3">NEW</a></li>
    <li className="SideDrawer-listItem"><a href="/" className="grey-text text-darken-3"> TOPS</a></li>
    <li className="SideDrawer-listItem"><a href="/" className="grey-text text-darken-3"> TROUSERS</a></li>
    <li className="SideDrawer-listItem"><a href="/" className="grey-text text-darken-3">DRESSES</a></li>
    <li className="SideDrawer-listItem"><a href="/" className="grey-text text-darken-3">ACCESSORIES</a></li>
    <li className="SideDrawer-listItem"><a href="/" className="grey-text text-darken-3">CLEARANCE</a></li>
    <li className="SideDrawer-listItem">
      <a href="/" className="grey-text text-darken-3">About</a>
    </li>
    <li className="SideDrawer-listItem">
      <a href="/" className="grey-text text-darken-3">Contact</a>
    </li>
    <li className="SideDrawer-listItem">
      <a href="/" className="grey-text text-darken-3"><i className="small material-icons">shopping_cart</i></a>
    </li>
  </ul>
</nav>
)

export default SideDrawer;