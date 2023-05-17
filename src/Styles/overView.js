import styled, { css } from "styled-components";
import { ShadowBox } from '../Styles/GlobalStyles'

export const OverviewWrapper = styled.div`
  display: grid;
  grid-template-columns: 20px auto 20px;
  align-items: center;
  margin: 20px 0;
  @media (max-width: 765px) {
    grid-template-columns: 1fr;
  }
`;
export const Boxes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: 100%;
  gap: 1.25rem;
  @media (max-width: 765px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 469px) {
    gap: 0.6rem;
  }
`;
export const Icon = styled.div`
  font-size: 2rem;
  @media (max-width: 765px) {
    &:nth-child(1) {
      display: none;
    }
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: var(--primaryYellow);
    background-color: var(--primary);
    font-size: 1.6rem;
  }
  @media (max-width: 469px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
`;

export const OverviewShadowBox = styled(ShadowBox)`
  color: #fff;
  @media (max-width: 765px) {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 5px 10px;
    &:nth-child(3) {
      display: none;
    }
  }
`;

export const Text = styled.div`
  color: ${(props) => (props.$gray && "#837e7e") || "black"};
  font-size: 0.5rem;
  ${(props) =>
    props.$number &&
    css`
      font-size: 1.7rem;
      margin: 20px 0;
      display: flex;
      align-items: center;
      gap: 4rem;
      @media (max-width: 469px) {
        font-size: 1.4rem;
        gap: 1rem;
        margin: 10px 0;
      }
    `}
  span {
    margin-left: 10px;
  }
`;
export const GraphIcon = styled.div``;

