import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ButtonInsert from "../../components/ButtonInsert/ButtonInsert";
import InputSearch from "../../components/InputSearch/InputSearch";
import * as S from "./Clients.style";
import Delete from "/delete.svg";
import Edit from "/edit.svg";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/app/clients")
      .then((res) => {
        setClients(res.data);
      })
      .catch((error) => {
        toast.error(error);
      });
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
              <S.Td>
                <S.ActionButton
                  onClick={() => {
                    console.log("deletou", cliente.id_cliente);
                  }}
                >
                  <S.DeleteImg src={Edit} />
                </S.ActionButton>

                <S.ActionButton
                  onClick={() => {
                    console.log("deletou", cliente.id_cliente);
                  }}
                >
                  <S.DeleteImg src={Delete} />
                </S.ActionButton>
              </S.Td>
            </S.Tr>
          ))}
        </S.TableBody>
      </S.TableContainer>
      <ToastContainer
        autoClose={3000}
        position={toast.POSITION.BOTTOM_CENTER}
        hideProgressBar={false}
        theme="colored"
      />
    </S.ClientContainer>
  );
};

export default Clients;
