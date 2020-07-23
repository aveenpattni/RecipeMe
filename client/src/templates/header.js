import styled from "@emotion/styled";
import units from "design-units";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/logo";

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
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
`
const TemplateStyled = styled.div`
  width: 100%;
  ${u({
    height: "80px",
  })};
`

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Link to="/">
          <Logo />
        </Link>
      </HeaderStyled>
      <TemplateStyled />
    </>
  )
}

export default Header;