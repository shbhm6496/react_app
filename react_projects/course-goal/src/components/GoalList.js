import Goals from "./Goals";

const GoalList = (props) => {
  return props.goals.map((goal) => <Goals value={goal.value} key={goal.id} />);
};
export default GoalList;
