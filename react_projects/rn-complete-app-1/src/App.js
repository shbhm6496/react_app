import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e4",
    title: "Car insurance",
    amount: "295.21",
    date: new Date(2021, 2, 21),
  },
  {
    id: "e3",
    title: "Clothes",
    amount: "295.21",
    date: new Date(2021, 2, 21),
  },
  {
    id: "e2",
    title: "New Car",
    amount: "295.21",
    date: new Date(2021, 2, 21),
  },
  {
    id: "e1",
    title: "Buy House",
    amount: "295.21",
    date: new Date(2021, 2, 21),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expenseData) => {
    //setExpenses([expenseData, ...expenses]);
    //Guarantees for latest snapshot
    setExpenses((preExpenses) => {
      return [expenseData, ...preExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
