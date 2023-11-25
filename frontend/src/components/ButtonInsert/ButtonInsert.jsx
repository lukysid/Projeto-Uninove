import * as S from "./ButtonInsert.style";

const ButtonInsert = ({ title, ...props }) => {
  return (
    <S.ButtonContainer>
      <S.ButtonInsert {...props}>{title}</S.ButtonInsert>
    </S.ButtonContainer>
  );
};

export default ButtonInsert;
