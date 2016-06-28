// Contenedor raíz que integra react-router con redux. Funcionalmente es el
// bootstrapping de la aplicación.
import React from 'react'
import { Router, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'
import Routes from '../routes'

const reduxMiddleware = [thunk]

const store = createStore(
  rootReducer,
  applyMiddleware(...reduxMiddleware)
)

export default (
  // Provider envuelve toda la app para que cada container tenga acceso al store
  <Provider store={ store }>
    { /* Rutas de la aplicación definidas con react-router */ }
    <Router history={ browserHistory } routes={ Routes } />
  </Provider>
)
