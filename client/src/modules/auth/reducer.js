import { FETCH_USER } from './types'

/**
 * NOTE
 *
 * In JS '' is seen as a falsy value thus doing !'' === true
 */

export default (state = null, { payload, type }) => {
  switch (type) {
    case FETCH_USER:
      // if payload = '' then it will return false
      // user is not logged in.
      return payload || false
    default:
      return state
  }
}
