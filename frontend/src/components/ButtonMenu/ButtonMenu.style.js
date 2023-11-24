import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 260px;

  margin: 5px 0px;

  text-decoration: none;
  color: white;

  &:hover {
    background-color: #fff;
    color: black;
  }

  &.active {
    background-color: #fff;
    color: black;
  }
`;

export const IconButton = styled.div`
  display: flex;
  width: 35px;
`;

export const TitleButton = styled.div`
  width: 100px;
`;
