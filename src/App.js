import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Title from './components/Title/Title';
import CircleBtn from './components/CircleBtn/CircleBtn';
import HandPinch from './components/HandPinch/HandPinch';

class App extends Component {
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
      <div className="App">
        <header className="App-header">
        <Header 
          drawerClickHandler={this.drawerToggleClickHandler} 
          />
        {sideDrawer}
        {backdrop}
        <Title 
          header1="Wendy"
          header2="Kakuda" 
          />
        <CircleBtn 
          text = ">" 
          click={this.circleBtnClickHandler}
          />
        <HandPinch />
        </header>
      </div>
    );
  }
}

export default App;
