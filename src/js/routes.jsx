import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/app'
import Home from './components/home'
import Perfiles from './components/perfiles'
import Perfil from './components/perfil'

module.exports = (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home } />

      { /* Anidar si usan un sublayout común */ }
      <Route path="perfiles" component={ Perfiles } />
      <Route path="perfiles/:id" component={ Perfil } />
    </Route>
  </Router>
)
