import * as S from "./ButtonMenu.style";

const ButtonMenu = ({ title, icon, ...props }) => {
  return (
    <S.NavbarLink {...props}>
      <S.IconButton>{icon}</S.IconButton>
      <S.TitleButton>{title}</S.TitleButton>
    </S.NavbarLink>
  );
};

export default ButtonMenu;
