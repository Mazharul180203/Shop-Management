import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/CSS/index.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import PasswordSetup from "./pages/PasswordSetup";
import Otp from "./pages/Otp";

import Dashboard from "./layout/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import NewSales from "./pages/SaleMenu/NewSales";

// for Subcategory pages
import Subcategory from "./pages/Subcategory/Subcategory";
import AddNewSubcategory from "./pages/Subcategory/AddNew";
import ViewAllSubcategory from "./pages/Subcategory/ViewAll";

// for Brand pages
import Brand from "./pages/Brand/Brand";
import AddNewBrand from "./pages/Brand/AddNew";
import ViewAllBrand from "./pages/Brand/ViewAll";

// for Supplier pages
import Supplier from "./pages/Supplier/Supplier";
import AllSupplier from "./pages/Supplier/AllSupplier";
import AddSupplier from "./pages/Supplier/AddSupplier";
import AllTransaction from "./pages/Supplier/AllTransaction";

//for category pages
import Category from "./pages/Category/Category";
import AddNewCategory from "./pages/Category/AddNew";
import ViewAllCategory from "./pages/Category/ViewAll";

// for unitmenu pages
import UnitMenu from "./pages/UnitMenu/UnitMenu";
import UnitMenuAddUnit from "./pages/UnitMenu/AddUnit";
import UnitMenuViewAll from "./pages/UnitMenu/ViewAll";
import AddTransaction from "./pages/Supplier/AddTransaction";
import Product from "./pages/Product/Product";
import AddProduct from "./pages/Product/AddProduct";
import AllProduct from "./pages/Product/AllProduct";
import NewPurchase from "./pages/Purchase/NewPurchase";
import Purchase from "./pages/Purchase/Purchase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <DashboardHome />,
      },
      {
        path: "new-sale",
        element: <NewSales />,
      },
      // for category pages
      {
        path: "category",
        element: <Category />,
        children: [
          {
            path: "add-new",
            element: <AddNewCategory />,
          },
          {
            path: "view-all",
            element: <ViewAllCategory />,
          },
        ],
      },
      // for subcategory pages
      {
        path: "subcategory",
        element: <Subcategory />,
        children: [
          {
            path: "add-new",
            element: <AddNewSubcategory />,
          },
          {
            path: "view-all",
            element: <ViewAllSubcategory />,
          },
        ],
      },
      // for unitmenu pages
      {
        path: "unitmenu",
        element: <UnitMenu />,
        children: [
          {
            path: "add-unit",
            element: <UnitMenuAddUnit />,
          },
          {
            path: "view-all",
            element: <UnitMenuViewAll />,
          },
        ],
      },
      // for brand pages
      {
        path: "brand",
        element: <Brand />,
        children: [
          {
            path: "add-new",
            element: <AddNewBrand />,
          },
          {
            path: "view-all",
            element: <ViewAllBrand />,
          },
        ],
      },
      // for product pages
      {
        path: "product",
        element: <Product />,
        children: [
          {
            path: "add-product",
            element: <AddProduct />,
          },
          {
            path: "all-product",
            element: <AllProduct />,
          },
        ],
      },
      // for Purchase pages
      {
        path: "purchase",
        element: <Purchase />,
        children: [
          {
            path: "new-purchase",
            element: <NewPurchase />,
          },
        ],
      },
      // for supplier pages
      {
        path: "supplier",
        element: <Supplier />,
        children: [
          {
            path: "all-supplier",
            element: <AllSupplier />,
          },
          {
            path: "all-transaction",
            element: <AllTransaction />,
          },
          {
            path: "add-supplier",
            element: <AddSupplier />,
          },
          {
            path: "add-transaction",
            element: <AddTransaction />,
          },
        ],
      },
      {
        path: "otp",
        element: <Otp />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "password-setup",
        element: <PasswordSetup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
