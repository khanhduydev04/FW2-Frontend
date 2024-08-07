import axios from "axios";
import axiosInstance, { axiosInstanceWithAuth } from "../../config/api";
import { getTokens } from "../../utils/auth";

export const getProducts = async (page = 1) => {
    try {
        const res = await axiosInstance.get(`/products?page=${page}`);
        return res;
    } catch (error) {
        console.error(error);
        return null;
    }
}
export const addProduct = async (data) => {
    try {
        const res = await axios.post('http://localhost:8080/api/products', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                "Authorization": `Bearer ${getTokens().accessToken}`,
            }
        });
        return res;
    } catch (error) {
        console.error(error);
        return null;
    }
}