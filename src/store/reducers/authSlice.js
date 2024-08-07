import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin: (state, action) => ({
      ...state,
    }),
    authUpdateUser: (state, action) => ({
      user: action.payload.user,
      accessToken: action.payload.accessToken,
      refreshToken: action.payload.refreshToken,
    }),
    authRegister: (state, action) => ({
      ...state,
      user: {
        username: action.payload.username,
        fullname: action.payload.fullname,
      },
    }),
    authRefreshToken: (state, action) => ({}),
    authLogOut: (state, action) => ({}),
  },
});

export const {
  authLogin,
  authRegister,
  authUpdateUser,
  authFetchMe,
  authRefreshToken,
  authLogOut,
} = authSlice.actions;

export default authSlice.reducer;
