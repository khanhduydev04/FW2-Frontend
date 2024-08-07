import { call, put } from "redux-saga/effects";
import { toast } from "react-toastify";
import { saveTokens, logOut } from "../../utils/auth";
import { login, register, refreshToken } from "../../services/auth";
import { authUpdateUser } from "../reducers/authSlice";
// import * as jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";

function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(login, payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveTokens(response.data.accessToken, response.data.refreshToken);
      const decoded = jwtDecode(response.data.accessToken);
      const user = {
        id: decoded.id,
        username: decoded.username,
        fullname: decoded.username,
        role: decoded.role,
      };
      yield put(
        authUpdateUser({
          user,
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        })
      );
    }
  } catch (error) {
    console.error(error);
  }
}

function* handleAuthRegister({ payload }) {
  console.log("handleAuthRegister:", payload);

  try {
    const response = yield call(register, payload);
    if (response.code === 201) {
      toast.success("Tạo tài khoản thành công");
    }
  } catch (error) {
    console.error(error);
  }
}

function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(refreshToken);
    if (response.data.accessToken) {
      saveTokens(response.data.accessToken, payload);
      const decoded = jwtDecode(response.data.accessToken);
      const user = {
        id: decoded.id,
        username: decoded.username,
        fullname: decoded.username,
        role: decoded.role,
      };
      yield put(
        authUpdateUser({
          user,
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        })
      );
    } else {
      yield handleAuthLogOut();
    }
  } catch (error) {
    console.error(error);
    logOut();
  }
}

function* handleAuthLogOut() {
  yield put(
    authUpdateUser({ user: null, accessToken: null, refreshToken: null })
  );
  logOut();
}

export {
  handleAuthLogin,
  handleAuthRegister,
  handleAuthRefreshToken,
  handleAuthLogOut,
};
