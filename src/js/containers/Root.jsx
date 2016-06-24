import React from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '../reducers'
import Routes from '../routes'

let store = createStore(rootReducer)

export default (
  // Provider envuelve toda la app para que cada container tenga acceso al store
  <Provider store={ store }>
    { /* Rutas de la aplicación definidas con react-router */ }
    <Router history={ browserHistory } routes={ Routes } />
  </Provider>
)
