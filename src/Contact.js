import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Title from './components/Title/Title';
import CircleBtn from './components/CircleBtn/CircleBtn';

class Contact extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});
  };

  circleBtnClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  }

  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer   smallBtnClickHandler ={this.backdropClickHandler}/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div className="Contact">
        <header className="Contact-header">
        <Header 
          drawerClickHandler={this.drawerToggleClickHandler} 
          />
        {sideDrawer}
        {backdrop}
        <Title header1="This is Contact page."
        />
        <CircleBtn 
          text = ">" 
          click={this.circleBtnClickHandler}
          />
        </header>
      </div>
    );
  }
}

export default Contact;