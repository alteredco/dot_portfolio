import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = (props) => {
  return (
    <p>
      <FontAwesomeIcon icon = {props.icon} />
    </p>
  );
};