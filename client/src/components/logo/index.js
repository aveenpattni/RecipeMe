import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import logo from "../../assets/icons/logo.svg";

const u = units;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  ${u({
    backgroundColor: "primary"
  })};
`
const ImageWrapper = styled.div`
  img {
    height: 2rem;
    width: 2rem;
  }
`
const TextWrapper = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  ${u({
    color: "text"
  })}
`

export const Logo = () => (
  <LogoWrapper>
    <ImageWrapper>
      <img src={logo} alt="RecipeMe Logo"/>
    </ImageWrapper>
    <TextWrapper>
      RecipeMe
    </TextWrapper>
  </LogoWrapper>
);
