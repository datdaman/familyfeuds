import { combineReducers } from 'redux'
import recipeReducer from './recipeReducer'
import recipeSelectedReducer from './recipeSelectedReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  recipes: recipeReducer,
  selectedRecipe: recipeSelectedReducer,
  form: formReducer
})