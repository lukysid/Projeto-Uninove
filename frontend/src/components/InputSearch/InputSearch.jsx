import { IoSearch } from "react-icons/io5";
import * as S from "./InputSearch.style";

const InputSearch = ({ placeholder = "" }) => {
  return (
    <S.InputContainer>
      <S.BgIcon>
        <S.SearchIcon>
          <IoSearch />
        </S.SearchIcon>
      </S.BgIcon>

      <S.InputSearch placeholder={placeholder} />
    </S.InputContainer>
  );
};

export default InputSearch;
