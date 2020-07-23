import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { Logo } from "../components/logo";
import { Link } from "react-router-dom";

const u = units;

const HeaderStyled = styled(Link)`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  text-decoration: none;
  ${u({
    height: "80px",
    backgroundColor: "primary"
  })};
`

const Header = () => {
  return (
    <HeaderStyled to="/">
      <Logo />
    </HeaderStyled>
  )
}

export default Header;