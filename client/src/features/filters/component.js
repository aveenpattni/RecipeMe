import styled from "@emotion/styled";
import units from "design-units";
import React, { useState } from 'react';
import { ingredientsNumList } from "../../fixtures/constants";
import { Cuisines } from "../../components/cuisines";

const u = units;

const FiltersWrapper = styled.div`
  ${u({
    display: ["none", "flex", "flex"]
  })}
  flex-direction: column;
  ${u({
    width: ["100%", "20rem"],
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

const IngredientsSelectorStyled = styled.select``


export const FiltersView = (props) => {
  const [isIngOpen, toggleIng] = useState(false);
  const [isCuisineOpen, toggleCuisine] = useState(false);
  return (
    <FiltersWrapper>
      Filters
      <FiltersAccordion>
        <FilterSection>
          <FilterHeader>
            Number of Ingredients
            <div onClick={() => toggleIng(!isIngOpen)}>{isIngOpen ? "🔻" : "🔺"}</div>
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
            Cuisines
            <div onClick={() => toggleCuisine(!isCuisineOpen)}>{isCuisineOpen ? "🔻" : "🔺"}</div>
          </FilterHeader>
          {
            isCuisineOpen ?
            <Cuisines updateCuisines={props.updateCuisines} cuisines={props.cuisines} />
            : null
          }
        </FilterSection>
      </FiltersAccordion>
    </FiltersWrapper>
  )
};
