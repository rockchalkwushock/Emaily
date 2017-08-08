import { combineReducers } from 'redux'

import { authReducer } from '../services'

export default combineReducers({
  auth: authReducer
})
