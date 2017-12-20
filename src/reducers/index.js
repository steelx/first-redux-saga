import { combineReducers } from 'redux'
import starWars from './starWars.reducer'

const rootReducer = combineReducers({
  starWars
})

export default rootReducer;