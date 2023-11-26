import axios from "axios";
import { useEffect, useState } from "react";
import ButtonInsert from "../../components/ButtonInsert/ButtonInsert";
import InputSearch from "../../components/InputSearch/InputSearch";
import * as S from "./Clients.style";

const Clients = () => {
  const [clients, setClients] = useState([]);

  const getClients = axios
    .get("http://localhost:8800/app/clients")
    .then((res) => {
      setClients(res.data);
    })
    .catch((error) => {
      console.log("error:", error);
    });

  useEffect(() => {
    getClients;
  }, []);

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
          {clients.map((cliente) => (
            <S.Tr key={cliente.id_cliente}>
              <S.Td>{cliente.id_cliente}</S.Td>
              <S.Td>{cliente.nome_cliente}</S.Td>
              <S.Td>{cliente.email_cliente}</S.Td>
              <S.Td>{cliente.telefone_cliente}</S.Td>
              <S.Td>{cliente.cpf_cliente}</S.Td>
              <S.Td></S.Td>
            </S.Tr>
          ))}
        </S.TableBody>
      </S.TableContainer>
    </S.ClientContainer>
  );
};

export default Clients;
