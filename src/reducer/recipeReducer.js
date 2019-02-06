import _ from 'lodash'
import dummyData from '../data/dummyData'
import {ADD_RECIPE, EDIT_RECIPE, DELETE_RECIPE} from '../actions/types'

export default (state=dummyData, action) => {

  switch(action.type){
    case ADD_RECIPE:
      return {...state, [action.payload.id]:action.payload}
    case EDIT_RECIPE:
      return {...state, [action.payload.id]:action.payload}
    case DELETE_RECIPE:
      return _.omit(state, action.payload)
    default:
      return state
  }
}