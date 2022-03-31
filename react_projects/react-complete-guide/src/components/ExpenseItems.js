import React, { useState } from "react";
import "../style/ExpenseItem.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updates");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={clickHandler}>Change Title</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItems;
