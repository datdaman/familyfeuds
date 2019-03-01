import { combineReducers } from 'redux'
import recipe from './recipe'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  recipes: recipe,
  form: formReducer
})