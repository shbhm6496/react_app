import React, { useState } from "react";
import GoalList from "./components/GoalList";
import NewGoal from "./components/NewGoal";

const DummyGoals = [
  { value: "Course Evaluation", id: 1 },
  { value: "Running", id: 2 },
];
function App() {
  const [goalList, setGoalList] = useState(DummyGoals);
  const addNewGoalHandler = (goalObj) => {
    setGoalList((prevGoalList) => {
      return [...prevGoalList, goalObj];
    });
  };
  return (
    <React.Fragment>
      <NewGoal onNewGoal={addNewGoalHandler} />
      <GoalList goals={goalList} />
    </React.Fragment>
  );
}

export default App;
