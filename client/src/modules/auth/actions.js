import axios from 'axios'
import { FETCH_USER } from './types'

export const fetchUser = () => async dispatch => {
  try {
    const { data, status } = await axios.get('/api/current_user')
    if (status !== 200) throw new Error('Aww nuts!')
    // if (typeof data !== 'object') {
    //   return dispatch({ type: FETCH_USER_ERROR })
    // }
    return dispatch({ type: FETCH_USER, payload: data })
  } catch (e) {
    throw e
  }
}
