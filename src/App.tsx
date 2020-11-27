import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <AppContainer>
      <Header>
        <Typography component="h1">Pew Pew Pew</Typography>
      </Header>
      <main></main>
    </AppContainer>
  );
}

export default App;
