import styled from "styled-components";

export const Dashboard = styled.main`
  background-color: var(--background);
  flex: 1;
  padding: 0 20px;
  @media (max-width: 765px) {
    background-color: white;
    flex: 1;
    padding: 0 10px;
  }
`;
export const Top = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 20px;
  @media (max-width: 765px) {
    flex-direction: column;
    align-items: start;
    margin: 20px 0;
  }
`;
export const Greeting = styled.h1`
  color: var(--primary);
  @media (max-width: 765px) {
    font-size: 2rem;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;
export const Paragraph = styled.p`
  color: #323232;
  margin-top: 10px;
  @media (max-width: 765px) {
    font-size: 1.2rem;
    margin-top: 4px;
  }
  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;
export const Date = styled.div`
  display: flex;
  background-color: var(--dateColor);
  padding: 1rem;
  border-radius: 10px;
  @media (max-width: 765px) {
    background-color: transparent;
    align-self: flex-end;
    max-width: 13rem;
    padding: 1rem 0;
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid black;
  width: 8rem;
  height: 2.5rem;
  border-radius: 10px;

  &:nth-child(2) {
    margin-left: 1.5rem;
  }
  @media (max-width: 765px) {
    border: 2px solid var(--primaryYellow);
    width: 5rem;
    height: 2rem;
    font-size: 0.7rem;
    border-radius: 5px;
    &:nth-child(2) {
      margin-left: 0.3rem;
    }
  }
  @media (max-width: 400px) {
    width: 4rem;
    height: 1.3rem;
  }
`;
export const Charts = styled.div`
  display: flex;
  justify-content: space-between;
`;