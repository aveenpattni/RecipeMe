import styled from "@emotion/styled";
import units from "design-units";
import React, { useState } from 'react';
import searchIcon from "../../assets/icons/search.svg";
import { useHistory } from "react-router-dom";

const u = units;

const SearchBarWrapper = styled.form`
  display: flex;
  justify-content: center;
`;
const SearchIcon = styled.div`
  ${u({
    height: "1.5rem",
    width: "1.5rem",
    backgroundColor: "white",
  })}
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 75%;
    width: 75%;
  }
`;

const SearchInput = styled.input`
  ${u({
    height: "1.5rem",
    borderRadius: "4px",
    border: "none",
  })}
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0;
  margin: 0;

  &:focus {
    outline: none;
  }

`;

export const SearchBarView = (props) => {
  const [search, updateSearch] = useState("");
  const history = useHistory();
  const searchLink = (e) => {
    e.preventDefault();
    props.onUpdate(search);
    history.push(`/search/${search.replace(" ", "_")}`);
  }
  return(
    <SearchBarWrapper onSubmit={searchLink}>
      <SearchIcon onClick={searchLink}  type="submit">
       <img src={searchIcon} alt="Search"/>
      </SearchIcon>
      <SearchInput type="text" placeholder="Search" id="Search Bar" onChange={input => updateSearch(input.target.value)}/>
    </SearchBarWrapper>
  )
};