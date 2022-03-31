import React from "react";

const AccountRow = (props) => {
  console.log(props);
  return (
    <tr>
      <td>{props.data.Date}</td>
      <td>{props.data.Name}</td>
      <td>{props.data.Descrition}</td>
      <td>{props.data.Type}</td>
      <td>${props.data.Amount}</td>
    </tr>
  );
};

export default AccountRow;
