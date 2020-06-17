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
  const [modalName, setModalName]= useState("Coming Soon...");
  const [modalContent, setModalContent] = useState("Coming soon...");
  const [modalUrl, setModalUrl] = useState("/");
  const [modalImgUrl, setModalImgUrl] = useState("/");
  const [modalGithub, setModalGithub] = useState("/");

  const projectBtnClickHandler = (name, content, link, imgLink, github) => {
    setModal(!modal);
    if(name){
      setModalName(name);
    };
    if(content){
      setModalContent(content);
    };
    if(link){
      setModalUrl(link)
    };
    if(imgLink){
      setModalImgUrl(imgLink);
    }
    if(github){
      setModalGithub(github);
    }
  }
  const backdropClickHandler = () => setModal(!modal);

  let projCard;
  let backdrop;

  if(modal){
    projCard = <ProjectCard 
      name ={modalName} 
      content = {modalContent} 
      url={modalUrl} 
      imgUrl={modalImgUrl}
      github = {modalGithub}
      smallBtnClickHandler ={backdropClickHandler} 
      />;
    backdrop = <Backdrop click={backdropClickHandler}/>;
  }

  return (
    <div className="Projects__grid">
    {projCard}
    {backdrop}
      <div className="row1">
        <ProjectBtn1 className="item" click={()=>projectBtnClickHandler(
          "01: TestSwitch",
          "Online Automated Coding Test app created to screen software developer candidates.",
          "https://testswitch-candidate-staging.herokuapp.com/?token=e701b7bc-6fb2-4b7e-a8ab-ef5ff66c43bd",
          "https://res.cloudinary.com/alteredco/image/upload/v1592399051/Screenshot_2020-06-17_at_14.03.39_jqmpgl.png",
          "https://github.com/alteredco/testswitch-frontend-candidate"
          )} />
        <img className="item" src={pinkSq} alt="pink-square" />
        <img className="item" src={aquaSq} alt="aqua-square" />
      </div>
      <div className="row2">
        <img className="item" src={navySq} alt="navy-square" />
        <ProjectBtn2 className="item" click={()=>projectBtnClickHandler(
          "02: Mars Mission",
          "Open API Mobile-first Educational Website            utilising APIs from NASA to engage children",
          "https://wendykakuda-marsmission.netlify.app",
          "https://res.cloudinary.com/alteredco/image/upload/v1592398821/Screenshot_2020-06-17_at_14.00.01_vrghcr.png",
          "https://github.com/alteredco/mars-mission"
        )} />
        <img className="item" src={aquaSq} alt="aqua-square" />
      </div>
      <div className="row3">
        <img className="item" src={navySq} alt="navy-square" />
        <img className="item" src={pinkSq} alt="pink-square" />
        <ProjectBtn3 className="item" click={()=>projectBtnClickHandler(
          "03: Clear View Escapes",
          "Travel Agency Website made with Node.JS, SASS, webpack and Gulp",
          "https://alteredco.github.io/travel-agency/",
          "https://res.cloudinary.com/alteredco/image/upload/v1529395383/Screen_Shot_2018-06-15_at_14.31.17_v50cvk.png",
          "https://github.com/alteredco/travel-agency"
          )} />
      </div>
      <div className="row4">
        <img className="item" src={navySq} alt="navy-square" />
        <ProjectBtn4 className="item" click={()=>projectBtnClickHandler(
          "04: Real Up",
          "React-based Mobile/Desktop hybrid App that was first place winner in Moms Can Code Hackathon 2018. An imposter syndrome therapy app.",
          "https://realupapp.herokuapp.com/",
          "https://res.cloudinary.com/alteredco/image/upload/v1553446622/Screen_Shot_2019-03-24_at_17.55.20_yyg6ov.png",
          "https://github.com/alteredco/RealUp"
          )} />
        <img className="item" src={aquaSq} alt="aqua-square" />
      </div>
      <div className="row5">
        <ProjectBtn5 className="item" click={()=>projectBtnClickHandler(
          "05: Phrase Hunter",
          "Hidden Phrase Game made in vanilla JS.",
          "https://phrase-hunter.netlify.app/",
          "https://res.cloudinary.com/alteredco/image/upload/v1557565845/Screen_Shot_2019-05-11_at_10.10.19_ilwiwv.png",
          "https://github.com/alteredco/tech-degree-project-4"
          )} />
        <img className="item" src={pinkSq} alt="pink-square" />
        <img className="item" src={aquaSq} alt="aqua-square" />
      </div>
    </div>
  );
};
