import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "loader",
  initialState: { loading: false },
  reducers: {
    setloading: (state, payload) => {
      console.log(payload);
      state.loading = payload?.payload;
    },
  },
});

export const { setloading } = slice.actions;

export default slice.reducer;
