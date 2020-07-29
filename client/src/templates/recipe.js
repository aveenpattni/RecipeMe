import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { Link } from "react-router-dom";
import { find } from "../features/find/api";

const u = units;

const RecipePageStyled = styled.div`
  ${u({
    color: "text"
  })};
`;

const RecipePage = () => {
  // Add component mount
  find();
  return (
    <RecipePageStyled>
      <Link to="/">
        Recipe Page! Click Here to go home!
      </Link>
    </RecipePageStyled>
  )
}

export default RecipePage;