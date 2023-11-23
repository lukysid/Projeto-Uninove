import { useForm } from "react-hook-form";
import InputPadrao from "../../components/InputPadrao/InputPadrao";
import * as S from "./login.style";
import LogoBranco from "/LogoBranco .svg";
import LogoLogin from "/LogoImgLogin.svg";

const Login = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <S.DivLogo>
        <S.LogoImg src={LogoBranco} />
      </S.DivLogo>
      <S.ContainerLogin>
        <S.LogoImgLogin src={LogoLogin} />
        <S.FormLogin
          method="post"
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          <InputPadrao label="Login" icon="bx bx-user" {...register("login")} />
          <InputPadrao
            type="password"
            label="Senha"
            icon="bx bx-lock"
            {...register("senha")}
          />
          <S.LoginButton>Entrar</S.LoginButton>
        </S.FormLogin>
      </S.ContainerLogin>
    </div>
  );
};

export default Login;
