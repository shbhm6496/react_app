import "../style/Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const expenses = props.items;

  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpenseChart expenses={filterExpenses} />
      <ExpenseList items={filterExpenses} />
    </Card>
  );
}

export default Expenses;
