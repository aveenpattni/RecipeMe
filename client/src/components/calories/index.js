import styled from "@emotion/styled";
import units from "design-units";
import React from 'react';
import { caloriesList } from "../../fixtures/constants";
import { Checkbox } from "../checkbox";

const u = units;

const CaloriesWrapper = styled.div`
  ${u({
    backgroundColor: "white"
  })};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
`
const CaloriesStyled = styled.div`
  display: flex;
`;

const CheckboxWrapper = styled.div`
  ${u({
    padding: [1]
  })}
`;

export const Calories = ({
  updateCalories,
  calories=[]
}) => {
  return (
  <CaloriesWrapper>
    {caloriesList.map(cal => (
      <CaloriesStyled>
        <CheckboxWrapper onClick={() => {updateCalories(cal)}}>
          <Checkbox isChecked={calories.includes(cal)}/>
        </CheckboxWrapper>
        {cal}
      </CaloriesStyled>
    ))}
  </CaloriesWrapper>
)};
