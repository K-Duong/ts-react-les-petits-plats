import { PropsCardRecipe } from "../../types/cardRecipe";
import { Ingredient } from "../../types/recipes";
import { LENGTH_OF_DESCRIPTION } from "../../constants";
import "./style.css";
import { FunctionComponent } from "react";

function CardRecipe(props: PropsCardRecipe) {
  const { recipe } = props;
  // console.log("recipe:", recipe);

  // TODO: how to improve it by dynamictly update nameIng from mocked data or call API
  // const renderImageRecipe = (nameImg: string): string => {
  //   return `assets/image_recipes/${nameImg}`;
  // };

  const IngredientComponent: FunctionComponent<{
    ingredientInfo: Ingredient;
  }> = ({ ingredientInfo }) => {
    const { ingredient, quantity, unit } = ingredientInfo;
    return (
      <div className="ingredient-info">
        <p className="ingredient-name">{ingredient}</p>
        {quantity && (
          <p className="ingredient-quantity">
            {quantity} {unit || ""}
          </p>
        )}
      </div>
    );
  };

  const limiteDescriptionToLength = (
    description: string,
    length: number
  ): string => {
    if (description.length > length) {
      return description.slice(0, length) + "...";
    } else {
      return description;
    }
  };

  return (
    <div className="card-recipe">
      <div className="card-header">
        <span className="recipe-time">{recipe.time} min</span>
        <img
          src={`src/assets/image_recipes/${recipe.image}`}
          className="recipe-img"
          alt={`photo de la ${recipe.name}`}
        />
      </div>

      <div className="card-body">
        <h4 className="recipe-title">{recipe.name}</h4>
        <p className="recipe-subtitle">RECETTE</p>
        <p className="recipe-description">
          {limiteDescriptionToLength(recipe.description, LENGTH_OF_DESCRIPTION)}
        </p>
        <p className="recipe-subtitle ">INGREDIENTS</p>
        <div className="recipe-ingredients">
          {recipe.ingredients.map((ing) => (
            <IngredientComponent key={ing.ingredient} ingredientInfo={ing} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardRecipe;
