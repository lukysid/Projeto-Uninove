import { NavLink } from "react-router-dom";
import InputSearch from "../../components/InputSearch/InputSearch";
import * as S from "./Clients.style";

const Clients = () => {
  return (
    <S.ClientContainer>
      <S.BreeadCrumb>Principal / Clientes</S.BreeadCrumb>

      <S.HeaderContainer>
        <InputSearch placeholder="Buscar Cliente" />
        <NavLink to="/clients/addclient">Inserir</NavLink>
      </S.HeaderContainer>
    </S.ClientContainer>
  );
};

export default Clients;
