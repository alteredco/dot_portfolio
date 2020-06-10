import React, {useState} from 'react';
import './App.css';
import projects from './assets/Projects.svg';
import project1 from './assets/sq-one.svg';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

const Portfolio =()=>{
  const [drawer, openDrawer] = useState(false);
  const drawerToggleClickHandler =()=>openDrawer(!drawer);
  const backdropClickHandler = () => openDrawer(!drawer);

  let sideDrawer;
  let backdrop;

  if(openDrawer) {
    sideDrawer = <SideDrawer   smallBtnClickHandler ={backdropClickHandler}/>;
    backdrop = <Backdrop click={backdropClickHandler}/>;
  }

    return (
      <div className="Portfolio">
        <header className="Portfolio-header">
        <Header 
          drawerClickHandler={drawerToggleClickHandler} 
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

export default Portfolio;
