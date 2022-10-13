import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    name: null,
  },
  reducers: {
    setProfileData: (state, action) => {
      state.name = action.payload;
    },
  },
  //Todo:handle client side states override
  extraReducers: {
    [HYDRATE]: (state, action) => {
      //   console.log("hydrate:", action.payload);
      if (!action.payload.profile.name) {
        return state;
      }
      state.name = action.payload.profile.name;
    },
  },
});
export const { setProfileData } = ProfileSlice.actions;
export default ProfileSlice.reducer;
