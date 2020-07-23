import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';

const u = units;

const SearchBarWrapper = styled.div``;

const SearchInput = styled.input``;

export const SearchBarView = ({onUpdate}) => {
  return(
    <SearchBarWrapper>
      <SearchInput type="text" id="Search Bar" onChange={input => onUpdate(input.target.value)}/>
    </SearchBarWrapper>
  )
};