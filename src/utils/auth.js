import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
const accessTokenKey = "accessToken";
const refreshTokenKey = "refreshToken";

const getTokens = () => {
  const accessToken = Cookies.get(accessTokenKey);
  const refreshToken = Cookies.get(refreshTokenKey);
  return {
    accessToken,
    refreshToken,
  };
};

const saveTokens = (accessToken, refreshToken) => {
  if (accessToken && refreshToken) {
    Cookies.set(accessTokenKey, accessToken, { expires: 30 });
    Cookies.set(refreshTokenKey, refreshToken, { expires: 30 });
  } else {
    Cookies.remove(accessTokenKey, {
      path: "/",
    });
    Cookies.remove(refreshTokenKey, {
      path: "/",
    });
  }
};

const logOut = () => {
  const accessToken = Cookies.get(accessTokenKey);
  if (accessToken) {
    Cookies.remove(accessTokenKey, {
      path: "/",
    });
    Cookies.remove(refreshTokenKey, {
      path: "/",
    });
  }
};

const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Thời gian hiện tại tính bằng giây

    return decoded.exp < currentTime;
  } catch (error) {
    return true; // Token không hợp lệ hoặc không thể giải mã
  }
};

export { getTokens, saveTokens, logOut, isTokenExpired };
