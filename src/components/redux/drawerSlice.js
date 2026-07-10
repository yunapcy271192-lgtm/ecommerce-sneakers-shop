import { createSlice } from "@reduxjs/toolkit";

export const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    isOpen: false,
    isLoggedIn: false,
  },
  reducers: {
    openDrawer: (state) => {
      state.isOpen = true;
    },
    closeDrawer: (state) => {
      state.isOpen = false;
    },
    toggleDrawer: (state) => {
      state.isOpen = !state.isOpen;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.isOpen = false;
    },
    login: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { openDrawer, closeDrawer, toggleDrawer, logout, login } =
  drawerSlice.actions;
export default drawerSlice.reducer;
