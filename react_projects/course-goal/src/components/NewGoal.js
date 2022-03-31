import React from "react";
import NewGoalForm from "./NewGoalForm";
const NewGoal = (props) => {
  const saveGoalHandler = (goal) => {
    const goalObj = {
      value: goal,
      id: Math.random().toString(),
    };
    props.onNewGoal(goalObj);
  };
  return (
    <div>
      <div>Course Goal</div>
      <NewGoalForm onSaveGoalValue={saveGoalHandler} />
    </div>
  );
};
export default NewGoal;
