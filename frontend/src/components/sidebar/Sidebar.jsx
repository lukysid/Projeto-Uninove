import React from "react";
import { NavLink } from "react-router-dom";
import { SideNavBar } from "./Sidebar.style.jsx";

const Sidebar = () => {
  return (
    <SideNavBar>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/AddClient">Add Client</NavLink>
    </SideNavBar>
  );
};

export default Sidebar;
