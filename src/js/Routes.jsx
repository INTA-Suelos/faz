import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './components/App'
import Portada from './components/Portada'
import Perfiles from './components/Perfiles'
import Perfil from './components/Perfil'

export default (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Portada } />

      { /* Anidar si usan un sublayout común */ }
      <Route path="perfiles" component={ Perfiles } />
      <Route path="perfiles/:id" component={ Perfil } />
    </Route>
  </Router>
)
