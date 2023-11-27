import { Link } from "react-router-dom";
import styled from "styled-components";

export const DivLogo = styled.div`
  background: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  margin-left: 130px;
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
  width: 100%;
  max-width: 700px;
  position: absolute;
  right: 0;
  top: 0;
`;

export const LogoImgLogin = styled.img`
  padding: 1rem;
`;

export const LoginButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 275px;
  height: 35px;
  margin-top: 2rem;
  background: black;
  border-radius: 5px;
  font-size: 1rem;
  color: #fff;
`;
