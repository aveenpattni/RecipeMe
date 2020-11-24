import styled from "@emotion/styled";
import units from "design-units";
import React, { useState } from 'react';
import { ingredientsNumList } from "../../fixtures/constants";
import { Cuisines } from "../../components/cuisines";
import { Calories } from "../../components/calories";

const u = units;

const FiltersWrapper = styled.div`
  ${u({
    display: ["none", "flex", "flex"]
  })}
  flex-direction: column;
  ${u({
    width: "20rem",
    height: "100%",
    backgroundColor: "white"
  })};
`
const UpdateButton = styled.button``

const FiltersAccordion = styled.div`
  flex-direction: column;
  align-items: flex-end;
  padding: 8px;
`

const FilterHeader = styled.h4`
  display: flex;
  justify-content: space-between;
`

const FilterSection = styled.div``
const FilterToggle = styled.div`
  cursor: pointer;
`

const IngredientsSelectorStyled = styled.select``


export const FiltersView = (props) => {
  const [isIngOpen, toggleIng] = useState(false);
  const [isCuisineOpen, toggleCuisine] = useState(false);
  const [isCalsOpen, toggleCals] = useState(false);
  return (
    <FiltersWrapper>
      Filters
      <FiltersAccordion>

        <FilterSection>
          <FilterHeader>
            Number of Ingredients
            <FilterToggle onClick={() => toggleIng(!isIngOpen)}>{isIngOpen ? "🔻" : "🔺"}</FilterToggle>
            </FilterHeader>
          {
            isIngOpen ?
            <IngredientsSelectorStyled value={props.ingredients} onChange={(e) => props.updateIngredients(e.target.value)}>
              {ingredientsNumList.map(ingr => 
                <option key={ingr} value={ingr}>{ingr}</option>
              )}
            </IngredientsSelectorStyled>
            : null
          }
        </FilterSection>

        <FilterSection>
          <FilterHeader>
            Calories
            <FilterToggle onClick={() => toggleCals(!isCalsOpen)}>{isCalsOpen ? "🔻" : "🔺"}</FilterToggle>
          </FilterHeader>
          {
            isCalsOpen ?
            <Calories updateCalories={props.updateCalories} calories={props.calories} />
            : null
          }
        </FilterSection>

      </FiltersAccordion>
    </FiltersWrapper>
  )
};
