import {RECIPE_SELECTED} from '../actions/types'

export default (selectedRecipe = null, action) => {
  switch(action.type){
    case RECIPE_SELECTED:
      return action.payload
    default:
      return selectedRecipe
  }
}