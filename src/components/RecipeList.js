import React from "react";

import RecipeCard from "./RecipeCard";
import "../styles/RecipeList.scss";

const RecipeList = props => {
  const recipes = props.recipes.map(recipe => {
    return <RecipeCard key={recipe.id} recipe={recipe} />
  })

  return (
      <div className="recipe-list">
        {recipes}
      </div>
  );

}

export default RecipeList;
