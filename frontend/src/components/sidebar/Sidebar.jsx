import { FaRegUser } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { IoIosGitNetwork } from "react-icons/io";
import { LuBoxes, LuListTodo } from "react-icons/lu";
import { MdHeadsetMic, MdOutlineAccountBalance } from "react-icons/md";
import { SiGoogleads } from "react-icons/si";
import { TiShoppingCart } from "react-icons/ti";

import ButtonMenu from "../ButtonMenu/ButtonMenu.jsx";
import * as S from "./Sidebar.style.js";
import LogoSidebar from "/LogoSidebar.svg";

const Sidebar = () => {
  return (
    <S.SideNavBar>
      <S.LogoSidebar src={LogoSidebar} />

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
    </S.SideNavBar>
  );
};

export default Sidebar;
