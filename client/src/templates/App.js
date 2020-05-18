import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import Header from "./header";
import Footer from "./footer";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landing";

const u = units;

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${u({
    backgroundColor: "secondary"
  })};
`

const App = () => {
  return (
    <AppWrapper>
      <Header />
      <Switch>
        <Route path="/" exact render={() => {return <LandingPage/> }} />
      </Switch>
      <Footer />
    </AppWrapper>
  );
}

export default App;
