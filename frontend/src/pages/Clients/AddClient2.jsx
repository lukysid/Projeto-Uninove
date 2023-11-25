import React from "react";
import { useForm } from "react-hook-form";
import InputPadrao from "../../components/InputPadrao/InputPadrao";

import {
  ClientContent,
  ContentInput,
  ContentInputCep,
  ContentInputEnd,
  ContentRadioInput,
  Div,
  DivRadio,
  EndContent,
  FormContent,
  FormIcon,
  FormTittle,
  FromHeader,
  InputCep,
  InputEnd,
  InputForm,
  LabelFone,
  LabelForm,
  LabelRadioForm,
  OptionEstado,
  RadioInput,
  SelectEstado,
  SubmitButton,
} from "./Style";

import { BiUserCheck } from "react-icons/bi";
import { PiUserCirclePlusFill } from "react-icons/pi";

const AddClient = () => {
  const { register, handleSubmit } = useForm();
  const handleFormSubmit = (data) => console.log(data);

  return (
    <>
      <FormContent method="post" onSubmit={handleSubmit(handleFormSubmit)}>
        <FromHeader>
          <FormIcon>
            <PiUserCirclePlusFill />
          </FormIcon>
          <FormTittle>Cadastro de Clientes</FormTittle>
        </FromHeader>
        <ClientContent>
          <Div>
            <InputPadrao
              label="Nome Completo"
              {...register("nome")}
              style={{ width: "1500px" }}
            />
          </Div>
          <Div>
            <ContentInput>
              <InputForm
                type="number"
                name="rg "
                placeholder=""
                {...register("rg")}
              />
              <LabelForm>RG</LabelForm>
            </ContentInput>
            <ContentInput>
              <InputForm
                type="number"
                name="cpf "
                placeholder=""
                {...register("cpf")}
              />
              <LabelForm>CPF</LabelForm>
            </ContentInput>
          </Div>
          <Div>
            <ContentInput>
              <InputForm
                type="text"
                name="email "
                placeholder=""
                {...register("email")}
              />
              <LabelForm>Email</LabelForm>
            </ContentInput>
            <ContentRadioInput>
              <LabelRadioForm>Gênero</LabelRadioForm>
              <DivRadio>
                <RadioInput
                  type="radio"
                  name="genero"
                  value="masculino"
                  {...register("genero")}
                />
                Masculino
                <RadioInput
                  type="radio"
                  name="genero"
                  value="feminino"
                  {...register("genero")}
                />
                Feminino
              </DivRadio>
            </ContentRadioInput>
          </Div>
          <Div>
            <ContentInput>
              <LabelFone>Telefone</LabelFone>
              <InputForm
                type="number"
                name="residencial "
                placeholder=""
                {...register("residencial")}
              />
              <LabelForm>Residencial</LabelForm>
            </ContentInput>
            <ContentInput>
              <InputForm
                type="number"
                name="celular "
                placeholder=""
                {...register("celular")}
              />
              <LabelForm>Celular</LabelForm>
            </ContentInput>
          </Div>
        </ClientContent>
        <ContentInputEnd>
          <EndContent>
            <InputEnd
              type="text"
              name="endereco"
              placeholder=""
              {...register("enredeco")}
            />
            <LabelForm>Endereço</LabelForm>
          </EndContent>
        </ContentInputEnd>
        <Div>
          <ContentInputCep>
            <InputCep
              type="number"
              name="cep"
              placeholder=""
              {...register("cep")}
            />
            <LabelForm>CEP</LabelForm>
          </ContentInputCep>
          <ContentInputCep>
            <InputCep
              type="text"
              name="cidade"
              placeholder=""
              {...register("cidade")}
            />
            <LabelForm>Cidade</LabelForm>
          </ContentInputCep>
          <SelectEstado {...register("estado")}>
            <OptionEstado value="AL">Alagoas</OptionEstado>
            <OptionEstado value="AP">Amapá</OptionEstado>
            <OptionEstado value="AM">Amazonas</OptionEstado>
            <OptionEstado value="BA">Bahia</OptionEstado>
            <OptionEstado value="CE">Ceará</OptionEstado>
            <OptionEstado value="DF">Distrito Federal</OptionEstado>
            <OptionEstado value="ES">Espirito Santo</OptionEstado>
            <OptionEstado value="GO">Goiás</OptionEstado>
            <OptionEstado value="MA">Maranhão</OptionEstado>
            <OptionEstado value="MT">Mato Grosso</OptionEstado>
            <OptionEstado value="MS">Mato Grosso do Sul</OptionEstado>
            <OptionEstado value="MG">Minas Gerais</OptionEstado>
            <OptionEstado value="PA">Pará</OptionEstado>
            <OptionEstado value="PB">Paraiba</OptionEstado>
            <OptionEstado value="PR">Pernambuco</OptionEstado>
            <OptionEstado value="PI">Piauí</OptionEstado>
            <OptionEstado value="RJ">Rio de Janeiro</OptionEstado>
            <OptionEstado value="RN">Rio Grande do Norte</OptionEstado>
            <OptionEstado value="RS">Rio Grande do Sul</OptionEstado>
            <OptionEstado value="RO">Rondônia</OptionEstado>
            <OptionEstado value="RR">Roraima</OptionEstado>
            <OptionEstado value="SC">Santa Catarina</OptionEstado>
            <OptionEstado value="SP">São Paulo</OptionEstado>
            <OptionEstado value="SE">Sergipe</OptionEstado>
            <OptionEstado value="TO">Tocantins</OptionEstado>
          </SelectEstado>
        </Div>
        <SubmitButton type="submit">
          <BiUserCheck />
          Salvar
        </SubmitButton>
      </FormContent>
    </>
  );
};

export default AddClient;
