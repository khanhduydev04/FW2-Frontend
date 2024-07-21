import { Outlet } from "react-router-dom";
import { Overlay } from "../components/Common";
import DashboardTopbar from "../components/Dashboard/DashboardTopbar";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";

const AdminLayout = () => {
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
