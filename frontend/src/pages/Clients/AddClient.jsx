import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/Input/Input";
import * as S from "./AddClient.style";

const AddClient = () => {
  const [client, setClient] = useState([0]);
  const { register, handleSubmit } = useForm();
  const { id } = useParams();

  const cpf = client[0].cpf_cliente;
  console.log(typeof cpf);

  useEffect(() => {
    const getClientEdit = async () => {
      try {
        if (id) {
          const response = await axios.get(
            "http://localhost:8800/app/clients/addclient/" + id
          );
          setClient(response.data);
        }
      } catch {}
    };

    getClientEdit();
  }, [id]);

  const onSubmit = (data) => {
    if (id) {
      axios
        .put(`http://localhost:8800/app/clients/addclient/${id}`, data)
        .then(({ data }) => {
          toast.success(data);
        })
        .catch(({ data }) => {
          toast.error(data);
        });
    } else {
      axios
        .post("http://localhost:8800/app/clients/addclient", data)
        .then(({ data }) => {
          toast.success(data);
        })
        .catch(({ data }) => {
          toast.error(data);
        });
    }
  };

  return (
    <S.AddClientContainer>
      <S.BreeadCrumb>
        Principal / Clientes / {id ? "Editar " : "Inserir "}Cliente
      </S.BreeadCrumb>

      <S.FormContainer method="post" onSubmit={handleSubmit(onSubmit)}>
        <S.FormHeader>
          <S.FormIcon>
            <PiUserCirclePlusFill />
          </S.FormIcon>
          <S.FormTitle>{id ? "Editar " : ""}Cadastro de Clientes</S.FormTitle>
        </S.FormHeader>

        <S.FormInputs>
          <Input
            label="Nome"
            width={"500px"}
            {...register("nome")}
            value={client[0].nome_cliente}
          />
          <Input
            label="CPF"
            width={"200px"}
            mask="999.999.999-99"
            value={client[0].cpf_cliente}
            {...register("cpf")}
          />
          <Input
            label="Email"
            width={"500px"}
            {...register("email")}
            value={client[0].email_cliente}
          />
          <Input
            label="RG"
            width={"200px"}
            mask="99.999.999-9"
            {...register("rg")}
            value={client[0].rg_cliente}
          />
          <Input
            label="Endereço"
            width={"730px"}
            {...register("endereco")}
            value={client[0].endereco_cliente}
          />
          <Input
            label="Telefone"
            width={"200px"}
            mask="(99) 9999-9999"
            {...register("telefone")}
            value={client[0].telefone_cliente}
          />
          <Input label="Cidade" width={"270px"} {...register("cidade")} />
          <Input
            label="CEP"
            width={"200px"}
            mask="99999-999"
            {...register("cep")}
            value={client[0].cep_cliente}
          />
        </S.FormInputs>

        <S.SubmitButton>Salvar</S.SubmitButton>
      </S.FormContainer>
      <ToastContainer
        autoClose={3000}
        position={toast.POSITION.BOTTOM_CENTER}
        hideProgressBar={false}
        theme="colored"
      />
    </S.AddClientContainer>
  );
};

export default AddClient;
