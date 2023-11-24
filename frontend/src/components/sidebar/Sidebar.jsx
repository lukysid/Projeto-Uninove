<<<<<<< HEAD
import { FaRegUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoIosGitNetwork } from "react-icons/io";
import { LuBoxes, LuListTodo } from "react-icons/lu";
import { MdHeadsetMic, MdOutlineAccountBalance } from "react-icons/md";
import { SiGoogleads } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";

=======
import React from "react";
>>>>>>> f0b52410765984caf9a80f8bc305dbd845f48657
import ButtonMenu from "../ButtonMenu/ButtonMenu.jsx";
import * as S from "./Sidebar.style.js";
import LogoSidebar from "/LogoSidebar.svg";

const Sidebar = () => {
  return (
    <S.SideNavBar>
      <S.LogoSidebar src={LogoSidebar} />

<<<<<<< HEAD
      <ButtonMenu to="/home" title="Home" icon={<FaHouse />} />

      <S.DivisorSidebar />
      <ButtonMenu to="" title="Contas" icon={<MdOutlineAccountBalance />} />
      <ButtonMenu to="/clients" title="Clientes" icon={<FaRegUser />} />
      <ButtonMenu to="" title="Time" icon={<IoIosGitNetwork />} />
      <ButtonMenu to="" title="Vendas" icon={<TiShoppingCart />} />
      <ButtonMenu to="" title="Lead" icon={<SiGoogleads />} />
      <ButtonMenu to="" title="Produtos" icon={<LuBoxes />} />
      <ButtonMenu to="" title="Tarefas" icon={<LuListTodo />} />
      <ButtonMenu to="" title="Suporte" icon={<MdHeadsetMic />} />
=======
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
>>>>>>> f0b52410765984caf9a80f8bc305dbd845f48657
    </S.SideNavBar>
  );
};

export default Sidebar;
