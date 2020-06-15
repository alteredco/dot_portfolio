import React from 'react';
import DrawerToggleBtn from '../DrawerToggleBtn/DrawerToggleBtn';
import './Header.scss';

const Header =(props)=> {
  return (
      <div className="Header_container">
          <DrawerToggleBtn click={props.drawerClickHandler}/>
      </div>
    );
  }

export default Header;
