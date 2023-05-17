import React from "react";
import "./index.css";
import styled from "styled-components";
import Header from "./layout/header/Header";
import Sidebar from "./layout/sidebar/Sidebar";
import Main from "./layout/main/Main";
function App() {
  return (
    <>
      <Header />
      <BodyWrapper>
        <Sidebar />
        <Main />
      </BodyWrapper>
    </>
  );
}
const BodyWrapper = styled.main`
  display: flex;
`;
export default App;
