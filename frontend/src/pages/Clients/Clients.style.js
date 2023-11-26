import styled from "styled-components";

export const ClientContainer = styled.div`
  padding: 10px;
  background-color: #fff;
`;

export const BreeadCrumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const TableContainer = styled.table`
  padding: 10px;
`;

export const TableHeader = styled.thead`
  height: 20px;
  background: #d9d9d9;
`;

export const TableBody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: left;
  padding: 5px 20px;
  font-size: 0.9rem;
  font-weight: normal;
`;

export const Td = styled.td`
  padding: 5px 20px;
  font-size: 0.9rem;
`;

export const DeleteImg = styled.img``;

export const ActionButton = styled.button`
  display: inline-block;
  justify-content: center;
  margin-left: 20px;
  border: none;
  background-color: #fff;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
