import { takeLatest } from "redux-saga/effects";
import {
  handleAuthLogin,
  handleAuthLogOut,
  handleAuthRefreshToken,
  handleAuthRegister,
} from "../actions/authHandlers";
import {
  authLogin,
  authLogOut,
  authRefreshToken,
  authRegister,
} from "../reducers/authSlice";

export default function* authSaga() {
  yield takeLatest(authLogin.type, handleAuthLogin);
  yield takeLatest(authRegister.type, handleAuthRegister);
  yield takeLatest(authRefreshToken.type, handleAuthRefreshToken);
  yield takeLatest(authLogOut.type, handleAuthLogOut);
}
