import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { Link } from "react-router-dom";

const u = units;

const RecipePageStyled = styled.div`
  ${u({
    color: "text"
  })};
`;

const BeginStyled = styled.div``;

const RecipePage = () => {
  return (
    <RecipePageStyled>
      <Link to="/">
        Recipe Page! Click Here to go home!
      </Link>
    </RecipePageStyled>
  )
}

export default RecipePage;