import React from "react";
import SmallBtn from "../SmallBtn/SmallBtn";

const ProjectCard = (props)=> {
  return (
    <nav className="SideDrawer-wrapper">
      <ul className="SideDrawer-list">
      <li className="SideDrawer-listItem">
        <p>{props.content}</p>
      </li>
    </ul>
    <SmallBtn text="Close" click={props.smallBtnClickHandler}/>
  </nav>
    )
  }

export default ProjectCard;