import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  path: "/",
};

const Slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPath(state, action) {
      state.path = action.payload;
    },
  },
});

export const { setPath } = Slice.actions;
export default Slice.reducer;
