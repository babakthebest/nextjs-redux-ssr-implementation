import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialsState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialsState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    clear: (state) => {
      state.value = 0;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // console.log("hydrate_count:", action.payload);
      if (!action.payload.counter.value) {
        return state;
      }
      state.value = state.counter.value + action.payload.counter.value;
    },
  },
});

export const { increment, decrement, incrementByAmount, clear } =
  counterSlice.actions;
export default counterSlice.reducer;
