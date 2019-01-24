import history from '../history'

export const selectedRecipe = recipe => {
  return {
    type: 'RECIPE_SELECTED',
    payload: recipe
  }
}

export const addRecipe = recipe => {
  
  history.push('/')
  return {
    type: 'ADD_RECIPE',
    payload: recipe,
  }
}
