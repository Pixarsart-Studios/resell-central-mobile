import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "data",
  initialState: { currentUser: null },
  reducers: {
    changeData: (state, payload) => {
      // console.log(payload?.payload?.result);
      if (typeof payload !== "undefined") {
        state.currentUser = payload?.payload?.result.user;
      }
    },
  },
});

export const { changeData } = slice.actions;

export default slice.reducer;
