import axiosInstance from "../../config/api";
import { axiosInstanceWithAuth } from "../../config/api";

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

export const getUsers = async () => {
  try {
    const res = await axiosInstanceWithAuth.get("/auth/users");
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    const res = await axiosInstanceWithAuth.get(`/auth/users/${id}`);
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateUser = async (id, data) => {
  try {
    const res = await axiosInstanceWithAuth.patch(`/auth/users/${id}`, {
      data,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteUser = async (id) => {
  try {
    const res = await axiosInstanceWithAuth.delete(`/auth/users/${id}`);
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
