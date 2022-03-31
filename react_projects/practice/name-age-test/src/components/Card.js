import React from "react";
import classes from "../style/Card.module.css";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className={classes.card}>{props.children}</div>
    </React.Fragment>
  );
};

export default Card;
