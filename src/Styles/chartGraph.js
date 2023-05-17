import styled from "styled-components";
import { ShadowBox, Title } from "../Styles/GlobalStyles";
export const Container = styled(ShadowBox)`
  width: 65%;
  margin-right: 20px;
  p {
    margin-bottom: 20px;
  }
  @media (max-width: 765px) {
    width: 100%;
  }
`;
export const Title2 = styled(Title)`
  text-align: start;
  margin: 10px 0 10px 0;
`;
