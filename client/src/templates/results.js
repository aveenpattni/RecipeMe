import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { Link } from "react-router-dom";
import queryString from "query-string";
import { search } from "../features/search/api";
import { find } from "../features/find/api";

const u = units;

const ResultsStyled = styled.div`
  ${u({
    color: "text"
  })};
`;

const ResultsPage = (props) => {
  console.log(queryString.parse(props.location.search), props.match.params.query);
  // Add component mount
  find();
  search({q: props.match.params.query.replace("_", " ")});
  return (
    <ResultsStyled>
        <Link to="/">
          Here are the results
        </Link>
    </ResultsStyled>
  )
}

export default ResultsPage;