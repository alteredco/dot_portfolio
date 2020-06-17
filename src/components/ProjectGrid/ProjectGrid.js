import React, { useState } from "react";
import pinkSq from "../../assets/sq-pink.svg";
import aquaSq from "../../assets/sq-aqua.svg";
import navySq from "../../assets/sq-navy.svg";
import ProjectBtn1 from "../ProjectBtnSvgs/ProjectBtn1";
import ProjectBtn2 from "../ProjectBtnSvgs/ProjectBtn2";
import ProjectBtn3 from "../ProjectBtnSvgs/ProjectBtn3";
import ProjectBtn4 from "../ProjectBtnSvgs/ProjectBtn4";
import ProjectBtn5 from "../ProjectBtnSvgs/ProjectBtn5";
import ProjectCard from "../ProjectCard/ProjectCard";
import Backdrop from "../Backdrop/Backdrop";

export const ProjectGrid = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("Coming soon...");

  const projectBtnClickHandler = (content) => {
    setModal(!modal);
    if(content){
      setModalContent(content);
    }
  }
  const backdropClickHandler = () => setModal(!modal);

  let projCard;
  let backdrop;

  if(modal){
    projCard = <ProjectCard content = {modalContent}/>;
    backdrop = <Backdrop click={backdropClickHandler}/>;
  }

  return (
    <div className="Projects__grid">
    {projCard}
    {backdrop}
      <div className="row1">
        <ProjectBtn1 className="item" click={()=>projectBtnClickHandler("Project 1")} />
        <img className="item" src={pinkSq} alt="pink-square" />
        <img className="item" src={aquaSq} alt="aqua-square" />
      </div>
      <div className="row2">
        <img className="item" src={navySq} alt="navy-square" />
        <ProjectBtn2 className="item" click={()=>projectBtnClickHandler("Project 2")} />
        <img className="item" src={aquaSq} alt="aqua-square" />
      </div>
      <div className="row3">
        <img className="item" src={navySq} alt="navy-square" />
        <img className="item" src={pinkSq} alt="pink-square" />
        <ProjectBtn3 className="item" click={()=>projectBtnClickHandler("Project 3")} />
      </div>
      <div className="row4">
        <img className="item" src={navySq} alt="navy-square" />
        <ProjectBtn4 className="item" click={()=>projectBtnClickHandler("Project 4")} />
        <img className="item" src={aquaSq} alt="aqua-square" />
      </div>
      <div className="row5">
        <ProjectBtn5 className="item" click={()=>projectBtnClickHandler("Project 5")} />
        <img className="item" src={pinkSq} alt="pink-square" />
        <img className="item" src={aquaSq} alt="aqua-square" />
      </div>
    </div>
  );
};
