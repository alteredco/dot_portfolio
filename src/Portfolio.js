import React, {useState} from 'react';
import './App.css';
import projects from './assets/Projects.svg';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { ProjectGrid } from './components/ProjectGrid/ProjectGrid';

const Portfolio =()=>{
  const [drawer, setDrawer] = useState(false);
  // const [hover, setHover] =useState(false);

  const drawerToggleClickHandler = () => setDrawer(!drawer);
  const backdropClickHandler = () => setDrawer(!drawer);
  // const circleBtnClickHandler = () => setDrawer(!drawer);

  let sideDrawer;
  let backdrop;

  if(drawer) {
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
        <ProjectGrid />
      </div>
    );
  }

export default Portfolio;
