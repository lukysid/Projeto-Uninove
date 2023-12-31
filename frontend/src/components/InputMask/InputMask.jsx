import { forwardRef } from "react";

import * as S from "./InputMask.style";

const InputPadrao = forwardRef(
  ({ label, icon, type, value, placeholder = "", width, ...props }, ref) => {
    return (
      <S.InputArea style={{ width: width }}>
        <S.InputForm
          type={type}
          placeholder={placeholder}
          value={value}
          {...props}
          ref={ref}
        />
        <S.LabelForm>{label}</S.LabelForm>
        <S.Icon>
          <i className={icon}></i>
        </S.Icon>
      </S.InputArea>
    );
  }
);

export default InputPadrao;
