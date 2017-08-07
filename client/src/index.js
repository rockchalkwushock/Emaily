import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'

import { App } from './components'
import store from './redux'

const Root = () =>
  <Provider store={store}>
    <App />
  </Provider>

render(<Root />, document.getElementById('root'))
registerServiceWorker()
