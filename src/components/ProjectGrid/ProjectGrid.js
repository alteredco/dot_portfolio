import React from "react";
import pinkSq from '../../assets/sq-pink.svg';
import aquaSq from '../../assets/sq-aqua.svg';
import navySq from '../../assets/sq-navy.svg';
import ProjectBtn1 from "../ProjectBtnSvgs/ProjectBtn1";
import ProjectBtn2 from "../ProjectBtnSvgs/ProjectBtn2";
import ProjectBtn3 from "../ProjectBtnSvgs/ProjectBtn3";

export const ProjectGrid = () => {
  return (
    <div className="Projects__grid">
      <div className="row1">
          <ProjectBtn1/>
          <img src={pinkSq} alt="pink-square" />
          <img src={aquaSq} alt="aqua-square"/>
          </div>
          <div className="row2">
          <img src={navySq} alt="navy-square"/>
          <ProjectBtn2 />
          <img src={aquaSq} alt="aqua-square"/>
          </div>
          <div className="row3">
          <img src={navySq} alt="navy-square"/>
          <img src={pinkSq} alt="pink-square"/>
          <ProjectBtn3 />
          </div>
          </div>
);
}
