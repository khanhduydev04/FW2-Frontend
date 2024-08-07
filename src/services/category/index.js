import axiosInstance from "../../config/api";
import { axiosInstanceWithAuth } from "../../config/api";

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

export const createCategory = async (name) => {
  try {
    const res = await axiosInstanceWithAuth.post("/categories", {
      name,
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateCategory = async (id, name) => {
  try {
    const res = await axiosInstanceWithAuth.patch(`/categories/${id}`, {
      name,
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
