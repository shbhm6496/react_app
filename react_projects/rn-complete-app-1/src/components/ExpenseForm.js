import React, { useState } from "react";
import "../style/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredDate, setenteredDate] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const titleChangeHandler = (event) => {
    setenteredTitle(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setenteredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setenteredAmount(event.target.value);
  };

  const buttonClickHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setenteredDate("");
    setenteredAmount("");
    setenteredTitle("");
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-11-22"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="submit" onClick={buttonClickHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
