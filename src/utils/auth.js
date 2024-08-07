import Cookies from "js-cookie";
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
    console.log("saveTokens:", accessToken, refreshToken);
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

export { getTokens, saveTokens, logOut };
