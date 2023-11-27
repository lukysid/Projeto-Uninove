import { FaRegUser } from "react-icons/fa";
import { FaDollarSign, FaRegCircleCheck } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdHeadsetMic } from "react-icons/md";
import { RiTodoLine } from "react-icons/ri";
import { SiGoogleads } from "react-icons/si";

import * as S from "./Home.style";

const Home = () => {
  return (
    <S.HomeContainer>
      <S.BreeadCrumb>Principal </S.BreeadCrumb>

      <S.InfoContainer>
        <S.InfoCard>
          <S.IconInfoCard>
            <FaRegUser />
          </S.IconInfoCard>
          <S.TitleInfoCard>
            <S.NumeroInfoCard>45</S.NumeroInfoCard>
            <S.TituloInfoCard>Clientes Novos</S.TituloInfoCard>
          </S.TitleInfoCard>
        </S.InfoCard>
        <S.InfoCard>
          <S.IconInfoCard>
            <FaDollarSign />
          </S.IconInfoCard>
          <S.TitleInfoCard>
            <S.NumeroInfoCard>180</S.NumeroInfoCard>
            <S.TituloInfoCard>Vendas Novas</S.TituloInfoCard>
          </S.TitleInfoCard>
        </S.InfoCard>
        <S.InfoCard>
          <S.IconInfoCard>
            <SiGoogleads />
          </S.IconInfoCard>
          <S.TitleInfoCard>
            <S.NumeroInfoCard>71</S.NumeroInfoCard>
            <S.TituloInfoCard>Leads Abertas</S.TituloInfoCard>
          </S.TitleInfoCard>
        </S.InfoCard>
        <S.InfoCard>
          <S.IconInfoCard>
            <MdHeadsetMic />
          </S.IconInfoCard>
          <S.TitleInfoCard>
            <S.NumeroInfoCard>15</S.NumeroInfoCard>
            <S.TituloInfoCard>Tickets Abertos</S.TituloInfoCard>
          </S.TitleInfoCard>
        </S.InfoCard>
      </S.InfoContainer>

      <S.PrevContainer>
        <S.VendasContainer>
          <S.TitleContainer>
            <IoCartOutline />
            <S.Title>Vendas Recentes</S.Title>
          </S.TitleContainer>

          <S.Table>
            <S.TableHeader>
              <S.Tr>
                <S.Th style={{ width: "80px" }}>Id</S.Th>
                <S.Th style={{ width: "300px" }}>Cliente</S.Th>
                <S.Th style={{ width: "200px" }}>Valor</S.Th>
                <S.Th style={{ width: "170px" }}>Data</S.Th>
              </S.Tr>
            </S.TableHeader>
            <S.TableBody>
              <S.Tr>
                <S.Td>1</S.Td>
                <S.Td>Luis Carlos Augusto</S.Td>
                <S.Td>R$ 350,00</S.Td>
                <S.Td>22/11/2023</S.Td>
              </S.Tr>
              <S.Tr>
                <S.Td>2</S.Td>
                <S.Td>Augusto Bittencurt</S.Td>
                <S.Td>R$ 1.200,00</S.Td>
                <S.Td>22/11/2023</S.Td>
              </S.Tr>
              <S.Tr>
                <S.Td>3</S.Td>
                <S.Td>Lucas Camargo</S.Td>
                <S.Td>R$ 50,00</S.Td>
                <S.Td>22/11/2023</S.Td>
              </S.Tr>
              <S.Tr>
                <S.Td>4</S.Td>
                <S.Td>Matheus Fava</S.Td>
                <S.Td>R$ 500,00</S.Td>
                <S.Td>22/11/2023</S.Td>
              </S.Tr>
              <S.Tr>
                <S.Td>5</S.Td>
                <S.Td>Michel Melo Gonçalves</S.Td>
                <S.Td>R$ 120,00</S.Td>
                <S.Td>22/11/2023</S.Td>
              </S.Tr>
              <S.Tr>
                <S.Td>6</S.Td>
                <S.Td>Breno Nazare</S.Td>
                <S.Td>R$ 200,00</S.Td>
                <S.Td>22/11/2023</S.Td>
              </S.Tr>
            </S.TableBody>
          </S.Table>
        </S.VendasContainer>
        <S.TarefaContainer>
          <S.TitleContainer>
            <RiTodoLine />
            <S.Title>Tarefas</S.Title>
          </S.TitleContainer>
          <S.TarefasCardContainer>
            <S.TarefaCard>
              <FaRegCircleCheck />
              Reunião as 8:00
            </S.TarefaCard>
            <S.TarefaCard>
              <FaRegCircleCheck />
              Ligar para Cliente 12
            </S.TarefaCard>
            <S.TarefaCard>
              <FaRegCircleCheck />
              Falar com Representante
            </S.TarefaCard>
            <S.TarefaCard>
              <FaRegCircleCheck />
              Ligar para Cliente 35
            </S.TarefaCard>
          </S.TarefasCardContainer>
        </S.TarefaContainer>
      </S.PrevContainer>
    </S.HomeContainer>
  );
};

export default Home;
