import axios from "axios";
import { useSelector } from "react-redux";
import { getTokens } from "../../utils/auth";

const API_BASE_URL = "http://localhost:8080/api";
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const axiosInstanceWithAuth = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${getTokens().accessToken}`,
  },
});

export default axiosInstance;
export { axiosInstanceWithAuth };
