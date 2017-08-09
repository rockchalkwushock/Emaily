import { FETCH_SURVEYS } from './types'

export default (state = [], { payload, type }) => {
  switch (type) {
    case FETCH_SURVEYS:
      return payload
    default:
      return state
  }
}
