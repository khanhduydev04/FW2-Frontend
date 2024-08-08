import axios from "axios";
import axiosInstance, { axiosInstanceWithAuth } from "../../config/api";
import { getTokens } from "../../utils/auth";

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
export const addProduct = async (data) => {
  try {
    const res = await axios.post("http://localhost:8080/api/products", data, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getTokens().accessToken}`,
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
export const updateProduct = async (id, data) => {
  try {
    const res = await axios.patch(
      `http://localhost:8080/api/products/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getTokens().accessToken}`,
        },
      }
    );
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:8080/api/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getTokens().accessToken}`,
      },
    });
    return res;
  } catch (error) {
    console.error(error);
    return null;
  }
};
