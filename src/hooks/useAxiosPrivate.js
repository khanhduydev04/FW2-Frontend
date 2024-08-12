import { axiosInstanceWithAuth } from "../config/api";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { getTokens } from "../utils/auth";

export default function useAxiosPrivate() {
  const refresh = useRefreshToken();
  const { accessToken } = getTokens();

  useEffect(() => {
    const requestInterceptor = axiosInstanceWithAuth.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
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
  }, [accessToken, refresh]);

  return axiosInstanceWithAuth;
}
