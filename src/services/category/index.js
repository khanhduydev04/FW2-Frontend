import axiosInstance from "../../config/api";
import {
  axiosInstanceWithAuth,
  requestWithAuthAndCustomHeaders,
} from "../../config/api";

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
    const res = await requestWithAuthAndCustomHeaders(
      "/categories",
      "POST",
      data,
      {
        "Content-Type": "multipart/form-data",
      }
    );
    // const res = await axios.post("http://localhost:8080/api/categories", data, {
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     Authorization: `Bearer ${accessToken}`,
    //   },
    // });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateCategory = async (id, data) => {
  try {
    const res = await requestWithAuthAndCustomHeaders(
      "/categories/" + id,
      "PATCH",
      data,
      {
        "Content-Type": "multipart/form-data",
      }
    );
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
