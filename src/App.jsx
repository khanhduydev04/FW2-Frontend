import "./App.css";

import CIientLayout from "./layouts/CIientLayout";
import AdminLayout from "./layouts/AdminLayout";
import HomePage from "./pages/client/HomePage";
import DashboardPage from "./pages/admin/DashboardPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <CIientLayout />,
    children: [{ path: "", element: <HomePage /> }],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [{ path: "", element: <DashboardPage /> }],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
