import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';

const u = units;

const FootStyled = styled.div`
  width: 100%;
  border-top: 2px solid #A3C4BC;
  ${u({
    display: "flex"
  })};
  justify-content: center;
`;
const ArrowStyled = styled.div`
  ${u({
    paddingLeft: "8px",
    paddingRight: "8px",
    display: "flex",
  })};
  flex-direction: column;
  align-items: center;
  p {
    padding: 0;
    margin: 0;
  }
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    background: ${props => props.isDisabled ? "grey" : "#BFD7B5"}
  }

`;
const DisplayStyled = styled.div`
  ${u({
    paddingLeft: "8px",
    paddingRight: "8px",
    display: "flex",
  })};
  align-items: center;
`;

export const PaginationFootView = ({
  searchProps,
  updatePage,
  total
}) => {
  const nextArrow = ">";
  const prevArrow = "<";
  const isPrevDisabled = searchProps.displayCount > searchProps.searchFrom;
  const isNextDisabled = searchProps.displayCount > total - searchProps.searchTo;
  return (
    <FootStyled>
      <ArrowStyled  isDisabled={isPrevDisabled} onClick={() => isPrevDisabled ? null: updatePage({
        searchTo: searchProps.searchTo - searchProps.displayCount,
        searchFrom: searchProps.searchFrom - searchProps.displayCount
      })}>
        {prevArrow}
        <p>Prev</p>
      </ArrowStyled>
      <DisplayStyled>
        Displaying {searchProps.searchFrom}-{searchProps.searchTo} of {total}
      </DisplayStyled>
      <ArrowStyled isDisabled={isNextDisabled} onClick={() => isNextDisabled ? null : updatePage({
        searchTo: searchProps.searchTo + searchProps.displayCount,
        searchFrom: searchProps.searchFrom + searchProps.displayCount
      })}>
        {nextArrow}
        <p>Next</p>
      </ArrowStyled>
    </FootStyled>
  )
}