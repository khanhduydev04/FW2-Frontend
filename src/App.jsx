import "./App.css";

import CIientLayout from "./layouts/CIientLayout";
import AdminLayout from "./layouts/AdminLayout";
import HomePage from "./pages/client/HomePage";
import DashboardPage from "./pages/admin/DashboardPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartPage from "./pages/client/CartPage";
import ProductPage from "./pages/client/ProductPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <CIientLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "gio-hang", element: <CartPage /> },
      { path: "san-pham", element: <ProductPage /> }
    ],
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
