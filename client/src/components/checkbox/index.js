import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';

const u = units;

const CheckboxWrapper = styled.div`
  width: 1rem;
  height: 1rem;
  ${u({
    backgroundColor: "white"
  })};
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`

export const Checkbox = ({isChecked = false}) => {
  return (
  <CheckboxWrapper>
    {isChecked ? "✓" : null}
  </CheckboxWrapper>
)};
