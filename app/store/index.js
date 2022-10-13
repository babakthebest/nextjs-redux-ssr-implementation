import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import ProfileSlice from "./slices/profile";
import counterSlice from "./slices/counter";
import userSlice from "./slices/user";

const makeStore = () =>
  configureStore({
    reducer: {
      profile: ProfileSlice,
      counter: counterSlice,
      users: userSlice,
    },
    devTools: true,
  });
export const wrapper = createWrapper(makeStore);
