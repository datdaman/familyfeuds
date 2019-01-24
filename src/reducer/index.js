import { combineReducers } from 'redux'
import recipeReducer from './recipeReducer'
import recipeSelectedReducer from './recipeSelectedReducer'

export default combineReducers({
  recipes: recipeReducer,
  selectedRecipe: recipeSelectedReducer
})