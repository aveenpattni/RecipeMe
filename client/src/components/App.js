import React from 'react';
import styled from "@emotion/styled";
import units from "design-units";
import logo from "../assets/aveen.jpg";
import axios from "axios";

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
const ImageWrapper = styled.div`
  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
  animation: spin infinite 20s linear;
  img {
    height: 8rem;
    width: 8rem;
  }
  ${u({
    padding: 4
  })}
`
const WelcomeStyled = styled.p`
  ${u({
    padding: 3,
    backgroundColor: "primary"
  })};
`

const click = async () => {
  await axios.get("/api/search", {
    params: {
      search: "chicken",
      from: 0,
      to: 10
    }
  }).then(res => {
      console.log("✅", res);
    })
    .catch(err => {
      console.log("🔥", err);
    })
}

function App() {
  return (
    <AppWrapper>
      <ImageWrapper>
        <button onClick={click}>
          <img src={logo} alt="Aveen Pattni"/>
        </button>
      </ImageWrapper>
      <WelcomeStyled>
        Welcome to Aveen Pattni's React Express App template!
      </WelcomeStyled>
      
    </AppWrapper>
  );
}

export default App;
