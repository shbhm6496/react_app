import React, { useState } from "react";

const NewGoalForm = (props) => {
  const [goalValue, setGoalValue] = useState("");
  const [isError, setIsError] = useState(false);

  const goalValueHandler = (event) => {
    setGoalValue(event.target.value);
    console.log("Helo");
    if (goalValue.trim().length === 0) {
      setIsError(true);
    }
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    props.onSaveGoalValue(goalValue);
    setGoalValue("");
  };
  return (
    <div>
      <form onSubmit={submitFormHandler}>
        <div>
          <label>Goal</label>
          <input type="text" onChange={goalValueHandler} value={goalValue} />
        </div>
        <div>{isError && <button>Add Goal</button>}</div>
      </form>
    </div>
  );
};

export default NewGoalForm;
