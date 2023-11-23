import styled from "styled-components";

export const FormContent = styled.form`
  background-color: #fff;
`;

export const FromHeader = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const FormIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const FormTittle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ClientContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
`;

export const Div = styled.div`
  display: flex;
`;

export const ContentInput = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 30px 0;
`;

export const ContentRadioInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 50px;
  padding: 30px 30px;
`;

export const DivRadio = styled.div`
  display: flex;
  gap: 15px;
`;

export const LabelRadioForm = styled.span``;

export const RadioInput = styled.input``;

export const InputForm = styled.input`
  position: relative;
  width: 250px;
  padding: 0.3rem;
  border: none;
  border-bottom: 1px solid;
  outline: none;

  &:not(:placeholder-shown) + span,
  &:focus + span {
    transform: translateY(-20px);
    font-size: 0.7rem;
    font-weight: 500;
    transition: 0.6s;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const LabelForm = styled.span`
  position: absolute;
  left: 0;
  padding-left: 1.8rem;
  pointer-events: none;
`;

export const LabelFone = styled.span`
  position: absolute;
  left: 20px;
  top: -10px;
  font-size: 0.8rem;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 30px;
  width: 120px;
  border: 2px solid;
  cursor: pointer;
  font-weight: 500;
`;

export const InputEnd = styled.input`
  position: relative;
  width: 550px;
  padding: 0.3rem;
  border: none;
  border-bottom: 1px solid;
  outline: none;

  &:not(:placeholder-shown) + span,
  &:focus + span {
    transform: translateY(-15px);
    font-size: 0.7rem;
    font-weight: 500;
    transition: 0.6s;
  }
`;

export const EndContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentInputEnd = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 50px;
  padding: 30px 0;
`;

export const InputCep = styled.input`
  position: relative;
  width: 165px;
  padding: 0.3rem;
  border: none;
  border-bottom: 1px solid;
  outline: none;

  &:not(:placeholder-shown) + span,
  &:focus + span {
    transform: translateY(-20px);
    font-size: 0.7rem;
    font-weight: 500;
    transition: 0.6s;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ContentInputCep = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 215px;
  height: 50px;
  padding: 10px 0;
`;

export const SelectEstado = styled.select``;

export const OptionEstado = styled.option``;
