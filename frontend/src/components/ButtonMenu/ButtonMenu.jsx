import * as S from "./ButtonMenu.style";

<<<<<<< HEAD
const ButtonMenu = ({ title, icon, ...props }) => {
  return (
    <S.NavbarLink {...props}>
      <S.IconButton>{icon}</S.IconButton>
      <S.TitleButton>{title}</S.TitleButton>
    </S.NavbarLink>
  );
=======
const ButtonMenu = ({ title, ...props }) => {
  return <S.NavbarLink {...props}>{title}</S.NavbarLink>;
>>>>>>> f0b52410765984caf9a80f8bc305dbd845f48657
};

export default ButtonMenu;
