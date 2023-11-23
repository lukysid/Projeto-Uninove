import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 0px;
  height: 50px;
  width: 260px;
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
