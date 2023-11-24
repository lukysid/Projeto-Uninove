import React from "react";
import ReactDOM from "react-dom/client";

import AddClient from "./pages/Clients/AddClient.jsx";
import Clients from "./pages/Clients/Clients.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/layout/index.jsx";
import "./styles/global.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/clients/addclient",
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
