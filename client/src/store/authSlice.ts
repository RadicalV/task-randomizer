import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { username: null, role: null },
  token: localStorage.getItem("token") || null,
};

export const authSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user.username = user.username;
      state.user.role = user.role;
      state.token = accessToken;
      localStorage.setItem("token", accessToken);
    },
    logout: (state, action) => {
      state.user.username = null;
      state.user.role = null;
      state.token = null;
      localStorage.removeItem("token");
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      const { username, role } = action.payload;
      state.user.username = username;
      state.user.role = role;
    },
  },
});

export const { setCredentials, logout, setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
