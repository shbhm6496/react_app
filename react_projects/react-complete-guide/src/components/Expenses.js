import React, { useState } from "react";
import Card from "./Card";
import "../style/Expenses.css";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = props.dummy_data.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter onYearChange={yearChangeHandler} selected={filteredYear} />
      <ExpensesChart filteredExpense={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
