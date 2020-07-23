import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { Link } from "react-router-dom";

const u = units;

const ResultsStyled = styled.div`
  ${u({
    color: "text"
  })};
`;

const ResultsPage = (props) => {
  return (
    <ResultsStyled>
        <Link to="/">
          Here are the results
        </Link>
    </ResultsStyled>
  )
}

export default ResultsPage;