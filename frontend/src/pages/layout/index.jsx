import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "../../styles/global.css";
import { ContentLayout, ContentPages, Pages } from "./Layout.style.js";

const Layout = () => {
  return (
    <>
      <ContentLayout>
        <Sidebar />

        <ContentPages>
          <Header />
          <Pages>
            <Outlet />
          </Pages>
        </ContentPages>
      </ContentLayout>
    </>
  );
};

export default Layout;
