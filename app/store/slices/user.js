import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  list: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.list = state.list.concat(action.payload);
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      //   console.log("hydrate_action:", action.payload);
      //   console.log("hydrate_state:", state.list);
      //   console.log(action.payload.users.list.length);
      //   console.log(state.list.length);

      if (state.list.length == 0) {
        state.list = state.list.concat(action.payload.users.list);
      }
      return state;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
