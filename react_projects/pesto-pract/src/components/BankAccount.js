import React, { useState } from "react";
import AccountRow from "./AccountRow";

const BankAccount = (props) => {
  const [taxes, setTaxes] = useState(props.taxes);
  console.log(taxes);
  const filterTax = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <div>
        <input type="date" onChange={filterTax} />
        <button>Filter</button>
        <table>
          <thead>
            <tr>
              <td>Date</td>
              <td>Name</td>
              <td>Description</td>
              <td>Type</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            {taxes.map((tax) => {
              <AccountRow data={tax} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BankAccount;
