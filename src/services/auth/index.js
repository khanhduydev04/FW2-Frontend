import axiosInstance from "../../config/api";

export const login = async ({ username, password }) => {
  try {
    const res = await axiosInstance.post("/auth/login", {
      username,
      password,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const register = async ({ fullname, username, password }) => {
  console.log("register:", fullname, username, password);

  try {
    const res = await axiosInstance.post("/auth/register", {
      fullname,
      username,
      password,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const refreshToken = async (refreshToken) => {
  try {
    const res = await axiosInstance.post("/auth/refresh-token", {
      refreshToken,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
