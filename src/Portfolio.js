import React, {Component} from 'react';
import './App.css';
import projects from './assets/Projects.svg';
import project1 from './assets/sq-one.svg';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Title from './components/Title/Title';
import CircleBtn from './components/CircleBtn/CircleBtn';

class Portfolio extends Component {
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
      <div className="Portfolio">
        <header className="Portfolio-header">
        <Header 
          drawerClickHandler={this.drawerToggleClickHandler} 
          />
        {sideDrawer}
        {backdrop}
         </header>
         <div className="Projects__title">
        <img src={projects} alt="projects"/>
        </div>
        <div className="Projects__grid">
        <div className="row1">
        <img src={project1} alt="project-1"/>
        </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
