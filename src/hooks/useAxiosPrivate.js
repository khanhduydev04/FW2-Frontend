import { axiosInstanceWithAuth } from "../config/api";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useSelector } from "react-redux";

export default function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    const requestInterceptor = axiosInstanceWithAuth.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }
        // Kiểm tra role admin trước khi gửi request
        if (auth.user.role !== "admin") {
          return Promise.reject({ message: "Unauthorized" });
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseInterceptor = axiosInstanceWithAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config;
        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstanceWithAuth(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstanceWithAuth.interceptors.request.eject(requestInterceptor);
      axiosInstanceWithAuth.interceptors.response.eject(responseInterceptor);
    };
  }, [auth.accessToken, auth.user.role, refresh]);

  return axiosInstanceWithAuth;
}
