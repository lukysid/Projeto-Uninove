import styled from "styled-components";

export const InputContainer = styled.div``;

export const InputSearch = styled.input`
  position: relative;
  height: 30px;
  width: 220px;
  padding-left: 35px;
  border: solid 1px black;
  border-radius: 5px;
`;

export const SearchIcon = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  padding-top: 8px;
`;

export const BgIcon = styled.div`
  position: absolute;
  height: 30px;
  width: 30px;
  background-color: black;
  border-radius: 5px 0px 0px 5px;
  z-index: 1;
`;
