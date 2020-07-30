import styled from "@emotion/styled";
import units from "design-units";
import React, { useEffect } from 'react';
import queryString from "query-string";
import { pathOr, findLastIndex } from "ramda";
import { PaginationFoot } from "../../features/pagination-foot/container";
import { RecipeCard } from "../../components/recipe-card";

const u = units;

const ResultsStyled = styled.div`
  ${u({
    width: "100%",
    color: "text"
  })};
`;
const GridStyled = styled.div`
  ${u({
    width: "100%",
    color: "text",
    display: "flex"
  })};
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ResultsPageView = (props) => {
  useEffect(() => {
    console.log(queryString.parse(props.location.search));
    // const queryParams = queryString.parse(props.location.search);
    props.searchRecipe({
      q: props.match.params.query.replace("_", " "),
      from: props.results.params.searchFrom,
      to: props.results.params.searchTo
    });
  }, []);
  console.log("🔺props", props)
  return (
    <ResultsStyled>
      <GridStyled>
        {pathOr([], ["results", "hits"], props).map(hit => <RecipeCard recipe={hit.recipe}/>)}
      </GridStyled>
      <PaginationFoot total={props.results.count}/>
    </ResultsStyled>
  )
};
