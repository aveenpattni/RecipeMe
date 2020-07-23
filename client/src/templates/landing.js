import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { Link } from "react-router-dom";
import hero from "../assets/hero.jpeg";
import { SearchBar } from "../components/seach-bar/container";

const u = units;

const LandingStyled = styled.div`
  ${u({
    color: "text",
    paddingLeft: [1, 1, 2],
    paddingRight: [1, 1, 2],
    maxWidth: ["100%", "100%", "1024px"]
  })};
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
`;

const BeginStyled = styled.button`
  border-radius: 4px;
  ${u({
    width: "8rem",
    padding: 1,
    border: "1px solid black",
    backgroundColor: "primary"
  })};
  :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    ${u({
      backgroundColor: "tertiary"
    })};
  }
`;
const HeroStyled = styled.div`
  ${u({
    paddingBottom: [1, 2, 3],
    paddingTop: [0, 0, 1]
  })};
  img {
    ${u({
      width: "100%",
      maxHeight: ["256px", "256px", "256px"]
    })};
  }
`;
const LandingMessageStyled = styled.div``;
const SearchBarStyled = styled.div`
  ${u({
    paddingBottom: 1
  })};
`;

const LandingPage = () => {
  return (
    <>
    <HeroStyled>
        <img src={hero} alt="Hero Banner"/>
    </HeroStyled>
    <LandingStyled>
      <LandingMessageStyled>
        <p>Welcome to RecipeMe! Your favourite online tool to search for fun recipes.</p>
        <p>Search here for a quick search or click below to begin!</p>
      </LandingMessageStyled>
      <SearchBarStyled>
        <SearchBar />
      </SearchBarStyled>
      <Link to="/search">
        <BeginStyled>
          Click Here to Begin!
        </BeginStyled>
      </Link>
    </LandingStyled>
    </>
  )
}

export default LandingPage;