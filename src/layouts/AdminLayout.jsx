import { Navigate, Outlet } from "react-router-dom";
import { Overlay } from "../components/Common";
import DashboardTopbar from "../components/Dashboard/DashboardTopbar";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import { useDispatch } from "react-redux";
import { getTokens, isTokenExpired } from "../utils/auth";
import { authRefreshToken } from "../store/reducers/authSlice";
import { jwtDecode } from "jwt-decode";

const AdminLayout = () => {
  const dispatch = useDispatch();

  const { accessToken, refreshToken } = getTokens();

  if (!accessToken || jwtDecode(accessToken).role !== "admin") {
    return <Navigate to="/tai-khoan/dang-nhap" replace></Navigate>;
  }
  if (isTokenExpired(accessToken) && refreshToken) {
    try {
      dispatch(authRefreshToken(refreshToken));
    } catch (error) {
      return <Navigate to="/tai-khoan/dang-nhap" replace></Navigate>;
    }
  }

  return (
    <div className="min-h-screen p-10 bg-slate-50">
      <Overlay></Overlay>
      <DashboardTopbar></DashboardTopbar>
      <div className="flex items-start gap-x-10">
        <DashboardSidebar></DashboardSidebar>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
