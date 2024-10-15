interface Ingredient {
  ingredient: string,
  quantity?: number|string,
  unit?: string
}
export interface Recipe {
  id: number|string,
  image: string,
  name: string,
  servings: number,
  ingredients: Ingredient[],
  time: number,
  description: string,
  appliance: string,
  ustensils: string[]
}