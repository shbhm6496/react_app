import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [isValid, setIsValid] = useState(true);
  let errorMsg = "";

  const setUserNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const setUserAgeHandler = (event) => {
    setUserAge(event.target.value);
  };
  const changeErrorView = () => {
    setIsValid(true);
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0) {
      setIsValid(false);
      errorMsg += "Enter valid Name";
    }
    if (userAge.trim().length === 0) {
      setIsValid(false);
      errorMsg += "\nEnter Valid Age";
    }
    if (!isValid) {
      return;
    }
    const user = {
      name: userName,
      age: userAge,
      id: Math.random().toString(),
    };
    props.onAddUser(user);
    setUserName("");
    setUserAge("");
  };
  return (
    <div>
      {!isValid && <ErrorModal message={errorMsg} onAccept={changeErrorView} />}
      <form onSubmit={addUserHandler}>
        <div>
          <label>Username </label>
          <input type="text" onChange={setUserNameHandler} value={userName} />
        </div>
        <div>
          <label>Age(in Years) </label>
          <input type="number" onChange={setUserAgeHandler} value={userAge} />
        </div>
        <button>Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
