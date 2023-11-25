import { PiUserCirclePlusFill } from "react-icons/pi";
import InputPadrao from "../../components/InputPadrao/InputPadrao";
import * as S from "./AddClient.style";

const AddClient = () => {
  return (
    <S.AddClientContainer>
      <S.BreeadCrumb>Principal / Clientes / Inserir Cliente</S.BreeadCrumb>

      <S.FormContainer>
        <S.FormHeader>
          <S.FormIcon>
            <PiUserCirclePlusFill />
          </S.FormIcon>
          <S.FormTitle>Cadastro de Clientes</S.FormTitle>
        </S.FormHeader>

        <S.FormInputs>
          <InputPadrao label="Nome" width={"500px"} />
          <InputPadrao label="CPF" width={"200px"} />
          <InputPadrao label="Email" width={"500px"} />
          <InputPadrao label="RG" width={"200px"} />
          <InputPadrao label="Endereço" width={"720px"} />
          <InputPadrao label="Telefone" width={"200px"} />
          <InputPadrao label="Cidade" />
          <InputPadrao label="CEP" width={"205px"} />
        </S.FormInputs>
      </S.FormContainer>
    </S.AddClientContainer>
  );
};

export default AddClient;
