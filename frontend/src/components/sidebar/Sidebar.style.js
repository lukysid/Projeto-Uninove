import styled from "styled-components";

export const SideNavBar = styled.nav`
  display: flex;
  height: 100vh;
  width: 100%;
  max-width: 260px;
  flex-direction: column;
  background-color: black;
`;

export const LogoSidebar = styled.img`
  margin: 25px;
`;

export const DivisorSidebar = styled.div`
  width: 90%;
  height: 2px;
  margin: 10px;
  position: relative;
  background-color: #fff;

  &::after {
    content: "";
    position: absolute;

    display: flex;
    justify-content: center;
    color: white;
  }
`;
