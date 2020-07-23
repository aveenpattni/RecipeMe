import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { Link } from "react-router-dom";
import { search } from "../features/search/api";

const u = units;

const SearchStyled = styled.div`
  ${u({
    color: "text"
  })};
`;

const BeginStyled = styled.div``;

const SearchPage = () => {
  search();
  return (
    <SearchStyled>

    </SearchStyled>
  )
}

export default SearchPage;