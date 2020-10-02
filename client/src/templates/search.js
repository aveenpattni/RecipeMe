import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { Link } from "react-router-dom";

const u = units;

const SearchStyled = styled.div`
  width: 100%;
  ${u({
    color: "text"
  })};
`;

const SearchPage = () => {
  return (
    <SearchStyled>
      <Link to="/">
        Click Here to go home!
      </Link>
    </SearchStyled>
  )
}

export default SearchPage;