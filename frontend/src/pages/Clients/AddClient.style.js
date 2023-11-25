import styled from "styled-components";

export const AddClientContainer = styled.div`
  padding: 10px;
  background-color: #fff;
`;

export const BreeadCrumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 10px;
`;

export const FormHeader = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 400;
`;

export const FormIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const FormTitle = styled.span`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const FormInputs = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 30px;
  width: 800px;
  height: 250px;
  padding: 10px;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  width: 200px;

  background-color: black;
  color: #fff;

  border: 1px solid black;
  border-radius: 5px;
  margin: 20px 10px;

  transition: transform 0.3s ease;

  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
