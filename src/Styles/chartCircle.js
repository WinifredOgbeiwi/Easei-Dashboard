import styled from "styled-components";
import { ShadowBox } from "../Styles/GlobalStyles";
export const Container = styled(ShadowBox)`
  width: 35%;
    @media (max-width: 765px) {
      width: 100%;
    }
`;
export const TitleContainer = styled.div`
  display: flex;
  gap: 0.9rem;
  
`;
export const CircleTitle = styled(TitleContainer)`
p{
    font-size:.6rem;
  }
`;

export const Circle = styled.div`
width:15px;
height:15px;
border-radius: 100%;
background-color: var(--blue);
`
export const Circle2 = styled(Circle)`
background-color:var(--primaryYellow)
`
export const Chart = styled.div``;


