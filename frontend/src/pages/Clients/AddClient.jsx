import { useForm } from "react-hook-form";
import { PiUserCirclePlusFill } from "react-icons/pi";
import Input from "../../components/Input/Input";
import InputMask from "../../components/InputMask/InputMask";
import * as S from "./AddClient.style";

const AddClient = () => {
  const { register, handleSubmit } = useForm();

  return (
    <S.AddClientContainer>
      <S.BreeadCrumb>Principal / Clientes / Inserir Cliente</S.BreeadCrumb>

      <S.FormContainer
        method="post"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
        <S.FormHeader>
          <S.FormIcon>
            <PiUserCirclePlusFill />
          </S.FormIcon>
          <S.FormTitle>Cadastro de Clientes</S.FormTitle>
        </S.FormHeader>

        <S.FormInputs>
          <Input label="Nome" width={"500px"} {...register("nome")} />
          <InputMask
            label="CPF"
            width={"200px"}
            mask="999.999.999-99"
            {...register("cpf")}
          />
          <Input label="Email" width={"500px"} {...register("email")} />
          <InputMask
            label="RG"
            width={"200px"}
            mask="99.999.999-9"
            {...register("rg")}
          />
          <Input label="Endereço" width={"730px"} {...register("endereco")} />
          <InputMask
            label="Telefone"
            width={"200px"}
            mask="(99) 9999-9999"
            {...register("telefone")}
          />
          <Input label="Cidade" width={"270px"} {...register("cidade")} />
          <InputMask
            label="CEP"
            width={"200px"}
            mask="99999-999"
            {...register("cep")}
          />
        </S.FormInputs>

        <S.SubmitButton type="submit">Salvar</S.SubmitButton>
      </S.FormContainer>
    </S.AddClientContainer>
  );
};

export default AddClient;
