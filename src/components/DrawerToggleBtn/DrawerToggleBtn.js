import React from 'react';
import './DrawerToggleBtn.css';

const DrawerToggleBtn = props => (
  <button className="DrawerToggleBtn-button" onClick={props.click}>
    <span className="DrawerToggleBtn-line" />
    <span className="DrawerToggleBtn-line" />
    <span className="DrawerToggleBtn-line" />
  </button>
)

export default DrawerToggleBtn;