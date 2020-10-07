import styled from "@emotion/styled";
import units from "design-units";
import React, { useEffect } from 'react';
import queryString from "query-string";
import { pathOr } from "ramda";
import { PaginationFoot } from "../../features/pagination-foot/container";
import { RecipeCard } from "../../components/recipe-card";
import { Filters } from "../../features/filters/container";

const u = units;

const ResultsStyled = styled.div`
  display: flex;
  ${u({
    width: "100%",
    color: "text",
    paddingRight: [2, 3, 0],
    paddingLeft: [2, 3, 0]
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
const FiltersStyled = styled.div`
  position: relative;
  z-index: 1;
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
  }, [props.results.params]);
  console.log("🔺props", props)
  return (
    <>
      <ResultsStyled>
        <FiltersStyled>
          <Filters />
        </FiltersStyled>
        <GridStyled>
          {pathOr([], ["results", "hits"], props).map(hit => <RecipeCard recipe={hit.recipe}/>)}
        </GridStyled>
      </ResultsStyled>
      <PaginationFoot total={props.results.count}/>
    </>
  )
};
