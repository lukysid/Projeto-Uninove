import ButtonInsert from "../../components/ButtonInsert/ButtonInsert";
import InputSearch from "../../components/InputSearch/InputSearch";
import * as S from "./Clients.style";

const Clients = () => {
  return (
    <S.ClientContainer>
      <S.BreeadCrumb>Principal / Clientes</S.BreeadCrumb>

      <S.HeaderContainer>
        <InputSearch placeholder="Buscar Cliente" />
        <ButtonInsert to="/clients/addclient" title="Inserir" />
      </S.HeaderContainer>

      <S.TableContainer>
        <S.TableHeader>
          <S.Tr>
            <S.Th style={{ width: "80px" }}>Id</S.Th>
            <S.Th style={{ width: "300px" }}>Nome</S.Th>
            <S.Th style={{ width: "350px" }}>Email</S.Th>
            <S.Th style={{ width: "170px" }}>Telefone</S.Th>
            <S.Th style={{ width: "200px" }}>CPF</S.Th>
            <S.Th style={{ width: "170px" }}>Ações</S.Th>
          </S.Tr>
        </S.TableHeader>

        <S.TableBody>
          <S.Tr>
            <S.Td>1</S.Td>
            <S.Td>Luciano Cupertino</S.Td>
            <S.Td>l.cupertino@hotmail.com</S.Td>
            <S.Td>4990-8340</S.Td>
            <S.Td>375.558.168-06</S.Td>
            <S.Td></S.Td>
          </S.Tr>
        </S.TableBody>
      </S.TableContainer>
    </S.ClientContainer>
  );
};

export default Clients;
