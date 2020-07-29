import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';

const u = units;

const FootStyled = styled.div`
  width: 100%;
  border-top: 2px solid #A3C4BC;
  ${u({
    display: "flex",
  })};
`;

export const PaginationFootView = ({
  searchProps,
  updatePage
}) => {
  return (
    <FootStyled>
      footer
    </FootStyled>
  )
}