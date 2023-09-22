import React, { useState } from "react";
import { Link } from "react-router-dom";

import ctrllogo from "../assets/ctrllogo.png";
import "../styles/Sidebar.css";

const Sidebar = ({ children }) => {
  const [sidebarClose, setSidebarClose] = useState(true);

  return (
    <div className="content">
      <nav className={`sidebar ${sidebarClose ? "sidebarClose" : ""}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src={ctrllogo} alt="logo" />
            </span>
            <div className="text header-text">
              <span className="name">Control.BR</span>
            </div>
            <i
              class="bx bx-chevron-right toggle"
              onClick={(e) => setSidebarClose(!sidebarClose)}
            ></i>
          </div>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-links">
                <Link className="a" to="/">
                  <i className="bx bx-home icon"></i>
                  <span className="text nav-text">Home</span>
                </Link>
              </li>
              <li className="nav-links">
                <Link className="a" to="/AddClient">
                  <i className="bx bx-user icon"></i>
                  <span className="text nav-text">Clientes</span>
                </Link>
              </li>
              <li className="nav-links">
                <Link className="a" to="">
                  <i className="bx bx-package icon"></i>
                  <span className="text nav-text">Produtos</span>
                </Link>
              </li>
              <li className="nav-links">
                <Link className="a" to="">
                  <i className="bx bx-cart icon"></i>
                  <span className="text nav-text">Vendas</span>
                </Link>
              </li>
              <li className="nav-links">
                <Link className="a" to="">
                  <i className="bx bx-dollar icon"></i>
                  <span className="text nav-text">Finanças</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content">
        <main> {children} </main>
      </div>
    </div>
  );
};

export default Sidebar;
