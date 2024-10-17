import { Recipe } from "../../types/recipes";

import { normalizeStr } from "../../utils/normalizeString";

////User can search recipes by name, description or ingredient in the general search input

export const filterByName = (input: string, currentRecipes: Recipe[]): Recipe[] => {
  return currentRecipes.filter((recipe) => normalizeStr(recipe.name).includes(normalizeStr(input)))
}

export const filterByDescription = (input: string, currentRecipes: Recipe[]): Recipe[] => {
  return currentRecipes.filter((recipe) => normalizeStr(recipe.description).includes(normalizeStr(input)))
}
export const filterByIngredient = (input: string, currentRecipes: Recipe[]): Recipe[] => {
  return currentRecipes.filter((recipe) => {
    return recipe.ingredients
      .map(ingredientInfo => ingredientInfo.ingredient)
      .some((ing) => normalizeStr(ing).includes(normalizeStr(input)))

 })
}

export const filterByUstensil = (input: string, currentRecipes: Recipe[]) : Recipe[] => {
  return currentRecipes.filter(recipe => {
    return recipe.ustensils.some(us => us.includes(normalizeStr(input)))
  })
}

export const filterByAppliance = (input: string, currentRecipes: Recipe[]) : Recipe[] => {
  return currentRecipes.filter(recipe => normalizeStr(recipe.description).includes(normalizeStr(input)))
}
