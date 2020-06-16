import React, {useState} from "react";
import pinkSq from '../../assets/sq-pink.svg';
import aquaSq from '../../assets/sq-aqua.svg';
import navySq from '../../assets/sq-navy.svg';
import ProjectBtn1 from "../ProjectBtnSvgs/ProjectBtn1";
import ProjectBtn2 from "../ProjectBtnSvgs/ProjectBtn2";
import ProjectBtn3 from "../ProjectBtnSvgs/ProjectBtn3";
import ProjectBtn4 from "../ProjectBtnSvgs/ProjectBtn4";
import ProjectBtn5 from "../ProjectBtnSvgs/ProjectBtn5";

export const ProjectGrid = () => {

  const [project, setProject] = useState(false);
  const projectBtnClickHandler = () => setProject(!project);

  return (
    <div className="Projects__grid">
      <div className="row1">
          <ProjectBtn1 click={projectBtnClickHandler}/>
          <img src={pinkSq} alt="pink-square" />
          <img src={aquaSq} alt="aqua-square"/>
          </div>
          <div className="row2">
          <img src={navySq} alt="navy-square"/>
          <ProjectBtn2 click={projectBtnClickHandler}/>
          <img src={aquaSq} alt="aqua-square"/>
          </div>
          <div className="row3">
          <img src={navySq} alt="navy-square"/>
          <img src={pinkSq} alt="pink-square"/>
          <ProjectBtn3 />
          </div>
          <div className="row4">
          <img src={navySq} alt="navy-square"/>
          <ProjectBtn4 click={projectBtnClickHandler}/>
          <img src={aquaSq} alt="aqua-square"/>
          </div>
          <div className="row5">
          <ProjectBtn5 click={projectBtnClickHandler}/>
          <img src={pinkSq} alt="pink-square" />
          <img src={aquaSq} alt="aqua-square"/>
          </div>
          </div>
);
}
