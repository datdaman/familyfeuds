import history from '../history'
import {RECIPE_SELECTED, ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE} from './types'

export const selectedRecipe = recipe => {
  return {
    type: RECIPE_SELECTED,
    payload: recipe,
  }
}

export const addRecipe = formValues => dispatch => {
  dispatch( {
    type: ADD_RECIPE,
    payload: formValues,
  })

  history.push('/familyfeuds')
}

export const deleteRecipe = recipeID => dispatch => {
  dispatch( {
    type: DELETE_RECIPE,
    payload: recipeID,
  })

  history.push('/familyfeuds')
}

export const editRecipe = formValues => dispatch => {
  dispatch( {
    type: EDIT_RECIPE,
    payload: formValues,
  })
    
  history.push('/familyfeuds')
}
