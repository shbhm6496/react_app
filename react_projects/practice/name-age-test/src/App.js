import "./App.css";
import Card from "./components/Card";
import AddUser from "./components/AddUser";
import React, { useState } from "react";
import UserList from "./components/UserList";

const DummyUserList = [{ name: "", age: null, id: "" }];
function App() {
  const [userList, setUserList] = useState(DummyUserList);
  const addNewUserHandler = (newUser) => {
    setUserList((prevUserList) => {
      return [...prevUserList, newUser];
    });
  };
  return (
    <React.Fragment>
      <Card>
        <AddUser onAddUser={addNewUserHandler} />
      </Card>
      <UserList userList={userList} />
    </React.Fragment>
  );
}

export default App;
