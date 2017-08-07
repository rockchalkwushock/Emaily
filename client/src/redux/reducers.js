import { combineReducers } from 'redux'

import { authReducer } from '../modules'

export default combineReducers({
  auth: authReducer
})
