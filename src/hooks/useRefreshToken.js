import axiosInstance from "../config/api";
import { getTokens, saveTokens } from "../utils/auth";

export default function useRefreshToken() {
  async function refresh() {
    const { refreshToken } = getTokens();
    if (!refreshToken) return null;
    try {
      const { data } = await axiosInstance.post("/auth/refresh", {
        refreshToken,
      });
      if (!data) return null;
      saveTokens(data.accessToken, refreshToken);
      return data.accessToken || null;
    } catch (error) {
      console.error("Failed to refresh token", error);
    }
  }
  return refresh;
}
