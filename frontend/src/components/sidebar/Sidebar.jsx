import React from "react";
import ButtonMenu from "../ButtonMenu/ButtonMenu.jsx";
import * as S from "./Sidebar.style.js";
import LogoSidebar from "/LogoSidebar.svg";

const Sidebar = () => {
  return (
    <S.SideNavBar>
      <S.LogoSidebar src={LogoSidebar} />

      <ButtonMenu to="/home" title="Home" />

      <S.DivisorSidebar />
      <ButtonMenu to="" title="Contas" />
      <ButtonMenu to="/clients" title="Clientes" />
      <ButtonMenu to="" title="Time" />
      <ButtonMenu to="" title="Vendas" />
      <ButtonMenu to="" title="Lead" />
      <ButtonMenu to="" title="Produtos" />
      <ButtonMenu to="" title="Tarefas" />
      <ButtonMenu to="" title="Suporte" />
    </S.SideNavBar>
  );
};

export default Sidebar;
