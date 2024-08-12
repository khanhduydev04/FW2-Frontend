import axios from "axios";

const API_BASE_URL = "http://172.16.29.65:8080/api";

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
  },
});

const requestWithAuth = (url = "", method = "GET", data = {}, headers = {}) => {
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
export { axiosInstanceWithAuth, requestWithAuth };
