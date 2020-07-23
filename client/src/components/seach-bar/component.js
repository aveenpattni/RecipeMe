import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';

const u = units;

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const SearchIcon = styled.div`
  ${u({
    height: "1.5rem",
    width: "1.5rem",
    backgroundColor: "white"
  })}
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center
`;

const SearchInput = styled.input`
  ${u({
    height: "1.5rem",
    borderRadius: "4px",
    border: "none"
  })}
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0;
  margin: 0;

  textarea:focus {
    outline: none;
  }
  
`;

export const SearchBarView = ({onUpdate}) => {
  return(
    <SearchBarWrapper>
      <SearchIcon>
        hi
      </SearchIcon>
      <SearchInput type="text" id="Search Bar" onChange={input => onUpdate(input.target.value)}/>
    </SearchBarWrapper>
  )
};