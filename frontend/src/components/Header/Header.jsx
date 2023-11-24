import React, { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import * as S from "./Header.style.js";

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Limpar o intervalo ao desmontar o componente
    return () => clearInterval(intervalId);
  }, []);

  // Função para obter o nome do dia da semana
  const getDayOfWeek = () => {
    const daysOfWeek = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];
    return daysOfWeek[currentDate.getDay()];
  };

  const getMonthName = () => {
    const months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    return months[currentDate.getMonth()];
  };

  const getCurrentTime = () => {
    const hours = currentDate.getHours().toString().padStart(2, "0");
    const minutes = currentDate.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  return (
    <S.HeaderContainer>
      <S.DateContainer>
        <CiCalendarDate />
        {`${getDayOfWeek()}, ${currentDate.getDate()} de ${getMonthName()} de ${currentDate.getFullYear()}  -  ${getCurrentTime()}`}
      </S.DateContainer>
    </S.HeaderContainer>
  );
};

export default Header;
