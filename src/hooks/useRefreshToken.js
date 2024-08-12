import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../config/api";
import { getTokens, saveTokens } from "../utils/auth";
import { authUpdateUser } from "../store/reducers/authSlice";

export default function useRefreshToken() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  async function refresh() {
    const { refreshToken } = getTokens();
    if (!refreshToken) return null;
    try {
      const { data } = await axiosInstance.post("/auth/refresh-token", {
        refreshToken,
      });
      if (!data) return null;
      saveTokens(data.accessToken, refreshToken);
      dispatch(
        authUpdateUser({
          user,
          accessToken: data.accessToken,
          refreshToken,
        })
      );
      return data.accessToken || null;
    } catch (error) {
      console.error("Failed to refresh token", error);
    }
  }
  return refresh;
}
