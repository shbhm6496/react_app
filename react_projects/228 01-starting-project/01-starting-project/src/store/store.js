import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState, //initialState: initialState,
  reducers: {
    login() {},
    logout() {},
    INCREMENT(state) {
      state.counter++; //imgur change in satte:state.counter, {...state}
    },
    DECREMENT(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "DECREMENT") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return { showCounter: !state.showCounter, counter: state.counter };
//   }

//   return state;
// };

//const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
export const counterActions = counterSlice.actions;
export const authAction = authSlice.actions;
