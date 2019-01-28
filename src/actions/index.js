import history from '../history'

export const selectedRecipe = recipe => {
  return {
    type: 'RECIPE_SELECTED',
    payload: recipe
  }
}

export const addRecipe = formValues => dispatch => {
  dispatch( {
    type: 'ADD_RECIPE',
    payload: formValues,
  })

  history.push('/familyfeuds')
}


export const editRecipe = (id, formValues) => dispatch => {
  dispatch( {
    type: 'EDIT_RECIPE',
    payload: formValues,
  })
    
  history.push('/familyfeuds')
}
