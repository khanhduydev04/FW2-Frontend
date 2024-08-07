import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CIientLayout from "./layouts/CIientLayout";
import AdminLayout from "./layouts/AdminLayout";

import HomePage from "./pages/client/HomePage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import ProductDetail from "./pages/client/ProductDetail";

import CartPage from "./pages/client/CartPage";
import ProductPage from "./pages/client/ProductPage";
import DashboardPage from "./pages/admin/DashboardPage";
import CategoryPage from "./pages/admin/Category/CategoryPage";
import AccountPage from "./pages/admin/Account/AccountPage";
import AdminProductPage from "./pages/admin/Product/ProductPage";
import AddAccountPage from "./pages/admin/Account/AddAccountPage";
import EditAccountPage from "./pages/admin/Account/EditAccountPage";
import AddCatagoryPage from "./pages/admin/Category/AddCatagoryPage";
import EditCatagoryPage from "./pages/admin/Category/EditCategoryPage";
import AddProductPage from "./pages/admin/Product/AddProductPage";
import EditProductPage from "./pages/admin/Product/EditProductPage";
import LoginPage from "./pages/auth/Login";
import RegisterPage from "./pages/auth/Resgister";
import PayPage from "./pages/client/PayPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <CIientLayout />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "gio-hang", element: <CartPage /> },
      { path: "thanh-toan", element: <PayPage /> },
      { path: "san-pham", element: <ProductPage /> },
      { path: "chi-tiet-san-pham", element: <ProductDetail /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "", element: <DashboardPage /> },
      {
        path: "categories",
        children: [
          {
            path: "",
            element: <CategoryPage />,
          },
          {
            path: "edit/:id",
            element: <EditCatagoryPage />,
          },
          {
            path: "add",
            element: <AddCatagoryPage />,
          },
        ],
      },
      {
        path: "account",
        children: [
          {
            path: "",
            element: <AccountPage />,
          },
          {
            path: "edit/:id",
            element: <EditAccountPage />,
          },
          {
            path: "add",
            element: <AddAccountPage />,
          },
        ],
      },
      {
        path: "product",
        children: [
          {
            path: "",
            element: <AdminProductPage />,
          },
          {
            path: "edit/:id",
            element: <EditProductPage />,
          },
          {
            path: "add",
            element: <AddProductPage />,
          },
        ],
      },
    ],
  },
  {
    path: "tai-khoan",
    children: [
      {
        path: "dang-nhap",
        element: <LoginPage />,
      },
      {
        path: "dang-ky",
        element: <RegisterPage />,
      },
    ],
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
