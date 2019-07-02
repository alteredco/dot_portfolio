import React from 'react';
import './DrawerToggleBtn.css';

const DrawerToggleBtn = props => (
  <button className="DrawerToggleBtn-button" onClick={props.click}>
    <div className="DrawerToggleBtn-line" />
    <div className="DrawerToggleBtn-line" />
    <div className="DrawerToggleBtn-line" />
  </button>
)

export default DrawerToggleBtn;