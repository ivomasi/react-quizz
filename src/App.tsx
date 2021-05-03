import React from "react";

import { GlobalStyle } from "./App.styles";

//components/views

import Quiz from "./Quiz/Quiz";

import MainMenu from "./MainMenu/MainMenu";

function App() {
  return (
    <main>
      <GlobalStyle />
      <Quiz />
    </main>
  );
}

export default App;
