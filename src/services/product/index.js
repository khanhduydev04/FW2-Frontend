import axiosInstance from "../../config/api";

export const getProducts = async (page = 1, limit = 5) => {
  try {
    const res = await axiosInstance.get(
      `/products?page=${page}&limit=${limit}`
    );
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const addProduct = async (axiosInstanceWithAuth, data) => {
  try {
    const res = await axiosInstanceWithAuth.post("/products", data, {
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
export const getProductById = async (id) => {
  try {
    const res = await axiosInstance.get(`/products/${id}`);
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const updateProduct = async (axiosInstanceWithAuth, id, data) => {
  try {
    const res = await axiosInstanceWithAuth.patch(`/products/${id}`, data, {
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
export const deleteProduct = async (axiosInstanceWithAuth, id) => {
  try {
    const res = await axiosInstanceWithAuth.delete(`/products/${id}`);
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
