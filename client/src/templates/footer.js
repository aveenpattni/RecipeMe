import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';

const u = units;

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  ${u({
    height: "24px",
    backgroundColor: "tertiary"
  })};
`
const ProductionStyled = styled.h3``;

const Footer = () => {
  return (
    <FooterStyled>
      <ProductionStyled>
        An Aveen Pattni Production.
      </ProductionStyled>
    </FooterStyled>
  )
}

export default Footer;