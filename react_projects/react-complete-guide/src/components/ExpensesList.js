import React from "react";
import "../style/ExpensesList.css";
import ExpenseItems from "./ExpenseItems";

const ExpensesList = (props) => {
  if (props.items.length == 0) {
    return <h2 className="expense-list__fallback">Found No Expenses</h2>;
  }
  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItems
          date={expense.date}
          amount={expense.amount}
          title={expense.title}
          key={expense.id}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
