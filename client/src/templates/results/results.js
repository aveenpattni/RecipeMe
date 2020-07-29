import styled from "@emotion/styled";
import units from "design-units";
import React, { useEffect } from 'react';
import queryString from "query-string";
import { PaginationFoot } from "../../features/pagination-foot/container";

const u = units;

const ResultsStyled = styled.div`
  ${u({
    width: "100%",
    color: "text"
  })};
`;

export const ResultsPageView = (props) => {
  useEffect(() => {
    console.log(queryString.parse(props.location.search));
    // const queryParams = queryString.parse(props.location.search);
    props.searchRecipe({
      q: props.match.params.query.replace("_", " "),
      from: 0,
      to: 10
    });
  }, []);
  console.log("🔺props", props)
  return (
    <ResultsStyled>
      Results
      <PaginationFoot />
    </ResultsStyled>
  )
};
