import { combineReducers } from 'redux'
import userProfile from './userProfile'

const rootReducer = combineReducers({
   userPofile: userProfile,
})

export default rootReducer