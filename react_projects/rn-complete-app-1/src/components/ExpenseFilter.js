import React from "react";
const ExpenseFilter = (props) => {
  const dropDownHandler = (event) => {
    props.onYearChange(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select onChange={dropDownHandler} value={props.selected}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
