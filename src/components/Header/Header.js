import React from 'react';
import DrawerToggleBtn from '../DrawerToggleBtn/DrawerToggleBtn';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header_container">
          <DrawerToggleBtn click={this.props.drawerClickHandler}/>
      </div>
    );
  }
}

export default Header;
