import React from 'react';
import DrawerToggleBtn from '../DrawerToggleBtn/DrawerToggleBtn';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header_container">
        <div>
          <DrawerToggleBtn click={this.drawerClickHandler}/>
        </div>
      </div>
    );
  }
}

export default Header;
