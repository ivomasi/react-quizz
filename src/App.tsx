import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//global styles
import { GlobalStyle } from "./App.styles";

//components/views

import Quiz from "./Quiz/Quiz";

import MainMenu from "./MainMenu/MainMenu";

import Results from "./Results/Results";

import Error from "./Error/Error";

function App() {
  return (
    <main>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <MainMenu />
          </Route>
          <Route path="/:id/result">
            <Results />
          </Route>
          <Route path="/:id/quiz">
            <Quiz />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
