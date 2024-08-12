import axiosInstance from "../../config/api";
import { axiosInstanceWithAuth, requestWithAuth } from "../../config/api";

export const getCategories = async () => {
  try {
    const res = await axiosInstance.get("/categories");
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getCategoryById = async (id) => {
  try {
    const res = await axiosInstance.get(`/categories/${id}`);
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createCategory = async (data) => {
  try {
    const res = await requestWithAuth("/categories", "POST", data, {
      "Content-Type": "multipart/form-data",
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateCategory = async (id, data) => {
  try {
    const res = await requestWithAuth("/categories/" + id, "PATCH", data, {
      "Content-Type": "multipart/form-data",
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteCategory = async (id) => {
  try {
    const res = await axiosInstanceWithAuth.delete(`/categories/${id}`);
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
