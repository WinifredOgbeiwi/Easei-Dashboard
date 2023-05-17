import styled, { css } from "styled-components";
import { ShadowBox } from "./GlobalStyles";
export const ExtendedBox = styled(ShadowBox)`
  margin: 20px;
  width: calc(100% - 45px);
  @media (max-width: 769px) {
    margin: 0px;
    width: 100%;
  }
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  color: var(--primary);
  margin-bottom: 50px;
  @media (max-width: 795px) {
    font-size: 0.5rem;
    margin-bottom: 10px;
  }
`;

export const TO = styled.h4`
  background-color: var(--blue);
  padding: 0.5rem 0.6rem;
  border-radius: 10px;
  margin-right: 2rem;
  @media (max-width: 479px) {
    padding: 0.3rem 0.2rem;
    border-radius: 6px;
  }
`;
export const TC = styled.h4``;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-radius: 20px;
  table-layout: fixed;
`;
export const Thead = styled.thead``;
export const TheadTr = styled.tr`
  background-color: var(--tableHeader);
  border-radius: 40px;
`;
export const Th = styled.th`
  padding: 0.6rem;
  color: var(--primary);
  text-transform: capitalize;
  font-weight: 600;
  font-size: 0.8rem;
  text-decoration: underline;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 964px) {
    font-size: 0.6rem;
  }
  @media (max-width: 769px) {
    font-size: 0.4rem;
  }
  @media (max-width: 400px) {
    font-size: 0.3rem;
    padding: 0.4rem 0;
  }
  :nth-child(6) {
    color: black;
  }
`;
export const Tbody = styled.tbody`
  color: black;
  @media (max-width: 509px) {
    padding: 0.4rem 0;
  }
`;
export const TbodyTr = styled.tr`
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
export const Td = styled.td`
  padding: 15px;
  font-size: 0.8rem;
  text-decoration: underline;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 964px) {
    font-size: 0.5rem;
  }
  @media (max-width: 769px) {
    font-size: 0.3rem;
    padding: 0.4rem 0;
  }
`;
