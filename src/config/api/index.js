import axios from "axios";
import { getTokens } from "../../utils/auth";

const API_BASE_URL = "http://localhost:8080/api";

const { accessToken } = getTokens();

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
    Authorization: `Bearer ${accessToken}`,
  },
});

const requestWithAuthAndCustomHeaders = (
  url = "",
  method = "GET",
  data = {},
  headers = {}
) => {
  return axiosInstanceWithAuth({
    url,
    method,
    data,
    headers: {
      ...axiosInstance.defaults.headers,
      ...headers,
    },
  });
};

export default axiosInstance;
export { axiosInstanceWithAuth, requestWithAuthAndCustomHeaders };
