import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

const Resume = () => {
  const [drawer, setDrawer] = useState(false);

  const drawerToggleClickHandler = () => setDrawer(!drawer);
  const backdropClickHandler = () => setDrawer(!drawer);

  let sideDrawer;
  let backdrop;

  if (drawer) {
    sideDrawer = <SideDrawer smallBtnClickHandler={backdropClickHandler} />;
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div className="Resume">
      <header className="Resume-header">
        <Header drawerClickHandler={drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
      </header>
      <div className="Resume__title">
        <h1>Wendy Kakuda</h1>
        <h2>Software Developer</h2>
      </div>
      <div className="Projects__grid">
        <div className="row1">
          <h3>Projects</h3>
        </div>
        <div className="row1"></div>
      </div>
    </div>
  );
};

export default Resume;
