import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    increamentByAmount: (state, action) => {
      state.count += action.payload;
    },
  }, // this is where we would name all of our different actions
});

export const { increment, decrement, reset, increamentByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
