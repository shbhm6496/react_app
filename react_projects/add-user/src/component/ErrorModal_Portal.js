import React, { lazy } from "react";
import reactDom from "react-dom";
import classes from "../styles/ErrorModule.module.css";
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return;
    <div className={classes.backdrop} onClick={props.onErrorHandle} />;
  };
  const ModalOverlay = (props) => {
    return;
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
    </Card>;
  };

  return (
    <React.Fragment>
      {reactDom.createPortal(
        <Backdrop onErrorHandle={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onErrorHandle}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
