export const selectedRecipe = recipe => {
  return {
    type: 'RECIPE_SELECTED',
    payload: recipe
  }
}