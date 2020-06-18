import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = (props) => {
  return (
    <p>
      <FontAwesomeIcon icon = {props.icon} />
    </p>
  );
};

export default Icon;