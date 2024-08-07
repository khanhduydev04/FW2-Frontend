import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./authSlice";

const reducer = combineReducers({
  auth: authSlice,
});

export default reducer;
