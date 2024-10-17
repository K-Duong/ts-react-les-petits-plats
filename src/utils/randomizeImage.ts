import recipes from "../data/recipes";

const listOfRecipesImages = recipes.map((recipe) => recipe.image);

export const randomizeSrcImage = (): string => {
  const randomIndex = Math.floor(Math.random() * 50);
  return `src/assets/image_recipes/${listOfRecipesImages[randomIndex]}`;
};
