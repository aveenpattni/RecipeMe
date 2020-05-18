import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { Logo } from "../components/logo";

const u = units;

const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  ${u({
    height: "80px",
    backgroundColor: "primary"
  })};
`

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
    </HeaderStyled>
  )
}

export default Header;