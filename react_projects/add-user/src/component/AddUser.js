import React, { useState } from "react";
import Card from "./Card";
import classes from "../styles/AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [Error, setError] = useState("");

  const addUserHandle = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please insert valid data",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age must be > 0",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge("");
    setEnteredUserName("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {Error && (
        <ErrorModal
          title={Error.title}
          message={Error.message}
          onErrorHandle={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandle}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            onChange={usernameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button onClick={addUserHandle} type="Submit">
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
