import dummyData from '../data/dummyData'
import {ADD_RECIPE, EDIT_RECIPE} from '../actions/types'

export default (state=dummyData, action) => {
  //delete recipe
  //update recipe

  switch(action.type){
    case ADD_RECIPE:
      return [...state, {id:Object.keys(state).length, ...action.payload}]
    case EDIT_RECIPE:
      const newState = {...state}
      newState[action.payload.id] = action.payload
      return Object.values(newState)
    default:
      return state
  }
}