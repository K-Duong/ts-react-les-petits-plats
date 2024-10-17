import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { Recipe } from "../types/recipes";
import recipes from "../data/recipes";
import { DropdownLists, RecipesContextType } from "../types/recipesContext";
import { normalizeStr } from "../utils/normalizeString";
import {
  filterByAppliance,
  filterByIngredient,
  filterByUstensil,
} from "../features/searchRecipes/generalSearch";

export const RecipesContext = createContext<RecipesContextType | null>(null);

const RecipesProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [currentRecipes, setCurrentRecipes] = useState<Recipe[]>([]);
  const [dropdownLists, setDropdownLists] = useState<DropdownLists | null>(
    null
  );

  const updateIngredientList = (data: Recipe[]): string[] => {
    if (data.length > 0) {
      return [
        ...new Set(
          data.reduce<string[]>(
            (acc, recipe) =>
              acc.concat(recipe.ingredients.map((ing) => ing.ingredient)),
            []
          )
        ),
      ].sort();
    }
    return [];
  };
  const updateUstensilsList = (data: Recipe[]): string[] => {
    if (data.length > 0) {
      return [
        ...new Set(
          data.reduce<string[]>(
            (acc, recipe) => acc.concat(...recipe.ustensils),
            []
          )
        ),
      ].sort();
    }
    return [];
  };

  const updateAppliancesList = (data: Recipe[]): string[] => {
    if (data.length > 0) {
      return [
        ...new Set(
          data.reduce<string[]>(
            (acc, recipe) => acc.concat(recipe.appliance),
            []
          )
        ),
      ].sort();
    }
    return [];
  };

  useEffect(() => {
    console.log("current recipes", currentRecipes);
    console.log("current dropdown list", dropdownLists);

    setDropdownLists({
      ingredients: updateIngredientList(currentRecipes),
      appliances: updateAppliancesList(currentRecipes),
      ustensils: updateUstensilsList(currentRecipes),
    });
  }, [currentRecipes]);

  //1.generalSearch by name, description or ingredient
  const generalSearch = (input: string): void => {
    let filteredList: Recipe[];
    console.log("input length:", input.length);

    if (input.length > 0) {
      const normalizeInput = normalizeStr(input);

      setCurrentRecipes(() => {
        // Filter the recipes based on the input
        filteredList = recipes.filter(
          (recipe) =>
            recipe.name.includes(normalizeInput) ||
            recipe.description.includes(normalizeInput) ||
            recipe.ingredients.some((ing) =>
              normalizeStr(ing.ingredient).includes(normalizeInput)
            )
        );

        return filteredList;
      });
    } else {
      setCurrentRecipes([]);
    }
  };

  //2.advancedSearch to filter recipes by ustensils, appliances or ingredients
  const advancedSearch = (input: string): void => {
    const normalizeInput = normalizeStr(input);

    //update currentRecipe in 3 scenarios:
    setCurrentRecipes((prevRecipesList) => {
      let filteredList = prevRecipesList;
      ////if input in ingredients dropdown list
      if (
        dropdownLists?.ingredients.some((ing) => ing.includes(normalizeInput))
      ) {
        filteredList = filterByIngredient(normalizeInput, prevRecipesList);
        ////if input in appliance dropdown list
      } else if (
        dropdownLists?.appliances.some((app) => app.includes(normalizeInput))
      ) {
        filteredList = filterByAppliance(normalizeInput, prevRecipesList);
        ////if input in ustensils dropdown list
      } else if (
        dropdownLists?.ustensils.some((ust) => ust.includes(normalizeInput))
      ) {
        filteredList = filterByUstensil(normalizeInput, prevRecipesList);
      }

      return filteredList;
    });
  };

  return (
    <RecipesContext.Provider
      value={{ currentRecipes, dropdownLists, generalSearch, advancedSearch }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
