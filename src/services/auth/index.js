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

export const getUsers = async (axiosInstanceWithAuth) => {
  try {
    const res = await axiosInstanceWithAuth.get("/users");
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUserById = async (axiosInstanceWithAuth, id) => {
  try {
    const res = await axiosInstanceWithAuth.get(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateUser = async (axiosInstanceWithAuth, id, data) => {
  try {
    const res = await axiosInstanceWithAuth.patch(`/users/${id}`, {
      data,
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteUser = async (axiosInstanceWithAuth, id) => {
  try {
    const res = await axiosInstanceWithAuth.delete(`/users/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
