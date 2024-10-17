import { Recipe } from "./recipes";

export type RecipesContextType = {
  currentRecipes: Recipe[];
  dropdownLists: DropdownLists | null;
  generalSearch: (input: string) => void;
  // TODO: to think about type parameter, how to use it
  // advancedSearch: (input: string, type: 'ingredients' | 'ustensils' | 'appliances') => void;
  advancedSearch: (input: string) => void;

};

type DropdownIngredients = string[];
type DropdownAppliances = string[];
type DropdownUstensils = string[];

export interface DropdownLists {
  ingredients: DropdownIngredients,
  appliances: DropdownAppliances,
  ustensils: DropdownUstensils
}