import React from "react";
import "./Preview.scss";

const Preview = (props) => {
  return (
  <figure className="Preview__main" alt={props.name}>
    <img className="Preview__img" src={props.imgUrl} alt={props.name} />
  </figure>
  );
}

export default Preview;