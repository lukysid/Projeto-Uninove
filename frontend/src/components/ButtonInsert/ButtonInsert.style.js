import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ButtonContainer = styled.div``;

export const ButtonInsert = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 120px;
  border-radius: 5px;
  font-size: 0.8rem;
  text-decoration: none;
  background-color: black;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: black;
    border: 1px solid black;
  }
`;
