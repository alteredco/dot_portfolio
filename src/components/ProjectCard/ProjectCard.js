import React from "react";
import "./ProjectCard.scss";
import Preview from  "../Preview/Preview";
import Title from"../Title/Title";
import SmallBtn from "../SmallBtn/SmallBtn";

const ProjectCard = (props)=> {
  return (
    <nav className="ProjectCard-wrapper">
      <ul className="ProjectCard-list">
      <li className="ProjectCard-title">
        <h3>{props.name}</h3>
      </li>
      <li className="ProjectCard-listItem row">
        <a href={props.url} alt={props.name} rel="noopener noreferrer" target="_blank">
        <Preview name={props.name} imgUrl={props.imgUrl}/>
        <p>view here >>></p>
        </a>
      </li>
      <li className="ProjectCard-listItem overview">
      <Title sub="overview"/>
        <p>{props.content}</p>
        <a href={props.github} alt="github link" rel="noopener noreferrer" target="_blank">view on github >>></a>
      </li>
      <li>
      <SmallBtn text="Close" click={props.smallBtnClickHandler}/>
      </li>
    </ul>
  </nav>
    )
  }

export default ProjectCard;