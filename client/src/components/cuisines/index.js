import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { cuisineList } from "../../fixtures/constants"
import { Checkbox } from "../checkbox";

const u = units;

const CuisinesWrapper = styled.div`
  ${u({
    backgroundColor: "white"
  })};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
`;

const CuisineStyled = styled.div`
  display: flex;
`;
const CheckboxWrapper = styled.div`
  ${u({
    padding: [1]
  })}
`;

export const Cuisines = ({
  updateCuisines,
  cuisines = []
}) => {
  console.log(cuisines);
  return (
  <CuisinesWrapper>
    {cuisineList.map(cuisine => (
      <CuisineStyled key={cuisine}>
        <CheckboxWrapper onClick={() => {updateCuisines(cuisine)}}>
          <Checkbox isChecked={cuisines.includes(cuisine)}/>
        </CheckboxWrapper>
        {cuisine}
      </CuisineStyled>
    ))}
  </CuisinesWrapper>
)};
