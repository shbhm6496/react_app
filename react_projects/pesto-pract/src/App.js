import "./App.css";
import BankAccount from "./components/BankAccount";
const taxes = [
  {
    Date: "2020-02-11",
    Name: "Shuham",
    Description: "This is a Dummy Data",
    Type: "",
    Amount: "38.32",
  },
  {
    Date: "2020-02-11",
    Name: "Shuham",
    Description: "This is a Dummy Data",
    Type: "",
    Amount: "38.32",
  },
  {
    Date: "2020-02-11",
    Name: "Shuham",
    Description: "This is a Dummy Data",
    Type: "",
    Amount: "38.32",
  },
  {
    Date: "2020-02-11",
    Name: "Shuham",
    Description: "This is a Dummy Data",
    Type: "",
    Amount: "38.32",
  },
];
function App() {
  return <BankAccount taxes={taxes} />;
}

export default App;
