import styled from "styled-components";

export const InputArea = styled.div`
  display: flex;
  width: 275px;
  position: relative;
  margin-top: 1.6rem;
`;

export const InputForm = styled.input`
  position: relative;
  width: 100%;
  height: 35px;
  border: solid 2px black;
  border-radius: 5px;
  font-size: 1.1rem;
  padding-left: 30px;
  outline: none;

  &:not(:placeholder-shown) + span,
  &:focus + span {
    transform: translateY(-10px);
    font-size: 0.7rem;
    font-weight: 500;
    transition: 0.6s;
  }
`;

export const LabelForm = styled.span`
  position: absolute;
  top: 3px;
  left: 30px;
  background-color: #fff;
  padding: 0 5px;

  font-size: 1.2rem;
  color: black;
`;

export const Icon = styled.div`
  position: absolute;
  top: 5px;
  left: 8px;
  font-size: 1.2rem;
`;
