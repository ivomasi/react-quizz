import React from "react";

import { GlobalStyle } from "./App.styles";

//components/views

import MainMenu from "./MainMenu/MainMenu";

function App() {
  return (
    <main>
      <GlobalStyle />
      <MainMenu />
    </main>
  );
}

export default App;
