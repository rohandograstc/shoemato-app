import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
