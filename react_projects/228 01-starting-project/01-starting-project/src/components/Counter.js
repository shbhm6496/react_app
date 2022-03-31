import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/store";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  const increaseHandler = () => {
    dispatch(counterActions.increase({ amount: 10 }));
    //dispatch({ type: "increase", amount: 5 });
  };
  const incrementHandler = () => {
    dispatch(counterActions.INCREMENT());
    //dispatch({ type: "INCREMENT" });
  };
  const decrementHandler = () => {
    dispatch(counterActions.DECREMENT());
    //dispatch({ type: "DECREMENT" });
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
    //dispatch({ type: "toggle" });
  };

  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={increaseHandler}>INCREMENT BY 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
