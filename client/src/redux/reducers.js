import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { authReducer, surveyReducer } from '../services'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  surveys: surveyReducer
})
