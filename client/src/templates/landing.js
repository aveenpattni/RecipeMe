import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { Link } from "react-router-dom";

const u = units;

const LandingStyled = styled.div`
  ${u({
    color: "text"
  })};
`;

const BeginStyled = styled.div``;

const LandingPage = () => {
  return (
    <LandingStyled>
      <p>Welcome to RecipeMe! Your favourite online tool to search for fun recipes.</p>
      <BeginStyled>
        <Link to="/search">
          Click Here to Begin!
        </Link>
      </BeginStyled>
    </LandingStyled>
  )
}

export default LandingPage;