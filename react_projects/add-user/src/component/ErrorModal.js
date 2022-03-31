import React, { lazy } from "react";
import classes from "../styles/ErrorModule.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onErrorHandle} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.action}>
          <Button onClick={props.onErrorHandle}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
