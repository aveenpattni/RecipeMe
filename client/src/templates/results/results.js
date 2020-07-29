import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { Link } from "react-router-dom";
import queryString from "query-string";

const u = units;

const ResultsStyled = styled.div`
  ${u({
    color: "text"
  })};
`;

export const ResultsPageView = (props) => {
  console.log(queryString.parse(props.location.search), props.match.params.query);
  // Add component mount
  props.searchRecipe({q: props.match.params.query.replace("_", " ")});
  return (
    <ResultsStyled>
        <Link to="/">
          Here are the results
        </Link>
    </ResultsStyled>
  )
}
