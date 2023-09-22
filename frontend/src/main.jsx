import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home.jsx";
import AddClient from "./pages/AddClient.jsx";
import Layout from "./pages/layout/Layout.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "addclient",
        element: <AddClient />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
