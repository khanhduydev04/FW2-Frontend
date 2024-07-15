import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
