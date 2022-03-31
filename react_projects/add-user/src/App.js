import "./App.css";
import AddUser from "./component/AddUser";
import React, { useState } from "react";
import UserList from "./component/UserList";

function App() {
  const [userList, setUsersList] = useState([]);

  const addUserHandle = (username, userAge) => {
    setUsersList((prevUserState) => {
      return [
        ...prevUserState,
        { name: username, age: userAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandle} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
