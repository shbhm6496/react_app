import React, { useState } from "react";
import "../style/Expenses.css";
import Cards from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState();
  const filterChangeHandler = (filtered_year) => {
    setFilteredYear(filtered_year);
  };
  return (
    <div>
      <Cards className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearChange={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}
        ;
      </Cards>
    </div>
  );
};

export default Expenses;
