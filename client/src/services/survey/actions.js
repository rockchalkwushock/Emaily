import axios from 'axios'
import { FETCH_SURVEYS } from './types'
import { FETCH_USER } from '../auth'

export const submitSurvey = (values, history) => async dispatch => {
  try {
    const res = await axios.post('/api/surveys', values)
    history.push('/surveys')
    dispatch({ type: FETCH_USER, payload: res.data })
  } catch (e) {
    throw e
  }
}

export const fetchSurveys = () => async dispatch => {
  try {
    const res = await axios.get('/api/surveys')
    dispatch({ type: FETCH_SURVEYS, payload: res.data })
  } catch (e) {
    throw e
  }
}
