import * as S from "./ButtonMenu.style";

const ButtonMenu = ({ title, ...props }) => {
  return <S.NavbarLink {...props}>{title}</S.NavbarLink>;
};

export default ButtonMenu;
