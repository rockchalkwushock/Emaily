import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const middlewares = [thunk]
let enhancers

if (process.env.NODE_ENV !== 'production') {
  const composeWithDevTools = require('redux-devtools-extension')
    .composeWithDevTools
  enhancers = composeWithDevTools(applyMiddleware(...middlewares))
} else {
  enhancers = compose(applyMiddleware(...middlewares))
}

const store = createStore(rootReducer, {}, enhancers)

export default store
