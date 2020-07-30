import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';

const u = units;

const RecipeCardStyled = styled.div`
  border: 1px solid black;
  ${u({
    height: ["12rem", "18rem", "18rem"],
    width: ["100%", "12rem", "12rem"],
    padding: "1rem",
    margin: "0.5rem"
  })};

`;
const RecipeImageStyled = styled.a`
  ${u({
    display: "flex"
  })};
  img {
    width: 100%;
    height: auto;
    ${u({
      height: ["100%", "auto", "auto"],
      width: ["auto", "100%", "100%"],
    })};
  }
`;

export const RecipeCard = ({recipe}) => {
  console.log("🔥", recipe);
  return(
    <RecipeCardStyled >
      <p>{recipe.label}</p>
      <p>Calories: {Math.round(recipe.calories)}</p>
      <RecipeImageStyled href={recipe.url} target="__blank">
        <img src={recipe.image}/>
      </RecipeImageStyled>
    </RecipeCardStyled>
  )
}