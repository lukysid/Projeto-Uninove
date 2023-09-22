import React from "react";

import "../../styles/global.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { ContentLayout, ContentPages } from "./Layout.style";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ContentLayout>
        <Header />
      </ContentLayout>
      <ContentPages>
        <Sidebar />
        <Outlet />
      </ContentPages>
    </>
  );
};

export default Layout;
