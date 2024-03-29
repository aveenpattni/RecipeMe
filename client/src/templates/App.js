import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import Header from "./header";
import Footer from "./footer";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./landing";
import SearchPage from "./search";
import { ResultsPage } from "./results/container";
import RecipePage from "./recipe";

const u = units;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  ${u({
    backgroundColor: "secondary"
  })};
`
const AppStyled = styled.div`
  width: 100%;
  ${u({
    maxWidth: [0, 1, 2]
  })};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <AppStyled>
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/search" exact>
            <SearchPage />
          </Route>
          <Route path="/search/:query" render={(props) =>  <ResultsPage {...props} /> } />
          <Route path="/recipe/:id" render={(props) =>  <RecipePage {...props} /> } />
          <Route path="/">
            <Redirect to="/" />
          </Route>
        </Switch>
      </AppStyled>
      <Footer />
    </AppWrapper>
  );
}

export default App;
