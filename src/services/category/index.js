import axiosInstance from "../../config/api";

export const getCategories = async () => {
  try {
    const res = await axiosInstance.get("/categories");
    return res.data;
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

export const createCategory = async (axiosInstanceWithAuth, data) => {
  try {
    const res = await axiosInstanceWithAuth.post("/categories", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateCategory = async (axiosInstanceWithAuth, id, data) => {
  try {
    const res = await axiosInstanceWithAuth.patch(`/categories/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteCategory = async (axiosInstanceWithAuth, id) => {
  try {
    const res = await axiosInstanceWithAuth.delete(`/categories/${id}`);
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
