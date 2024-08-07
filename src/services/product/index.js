import axiosInstance from "../../config/api";

export const getProducts = async () => {
    try {
        const res = await axiosInstance.get("/products");
        return res;
      } catch (error) {
        console.error(error);
        return null;
      }
}