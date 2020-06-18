import React from "react";
import "./ProjectCard.scss";
import Preview from  "../Preview/Preview";
import Title from"../Title/Title";
import Icon  from '../Icon/Icon';
import SmallBtn from "../SmallBtn/SmallBtn";
import {faExternalLinkAlt, faCodeBranch} from '@fortawesome/free-solid-svg-icons';

const ProjectCard = (props)=> {
  return (
    <nav className="ProjectCard-wrapper">
    <header className="ProjectCard-header">
    <h3 className="ProjectCard-title">{props.name}</h3>
    </header>
      <ul className="ProjectCard-list">
      <li className="ProjectCard-listItem row">
        <a href={props.url} alt={props.name} rel="noopener noreferrer" target="_blank">
        <Preview name={props.name} imgUrl={props.imgUrl}/>
        <p>Live Version <Icon icon={faExternalLinkAlt}/></p>
        </a>
      </li>
      <li className="ProjectCard-listItem overview">
      <Title sub="overview"/>
        <p>{props.content}</p>
        <a href={props.github} alt="github link" rel="noopener noreferrer" target="_blank"><p>See on Github<Icon icon={faCodeBranch}/></p></a>
      </li>
      <li className ="ProjectCard-btn">
      <SmallBtn text="Close" click={props.smallBtnClickHandler}/>
      </li>
    </ul>
  </nav>
    )
  }

export default ProjectCard;