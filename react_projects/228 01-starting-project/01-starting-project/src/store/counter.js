import { configureStore, createSlice } from "@reduxjs/toolkit";
import { counterActions } from "./store";

const initialCounterState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      showCounter = !showCounter;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
  },
});

export default counterSlice;
export default counterActions =  counterSlice.actions;
