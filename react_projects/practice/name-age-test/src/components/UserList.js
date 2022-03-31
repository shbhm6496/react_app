import User from "./User";
const UserList = (props) => {
  return (
    <div>
      {props.userList.map((user) => (
        <User key={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};
export default UserList;
