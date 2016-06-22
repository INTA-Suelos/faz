import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './Components/App'
import Portada from './Components/Portada'
import Perfiles from './Components/Perfiles'
import Perfil from './Components/Perfil'

module.exports = (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Portada } />

      { /* Anidar si usan un sublayout común */ }
      <Route path="perfiles" component={ Perfiles } />
      <Route path="perfiles/:id" component={ Perfil } />
    </Route>
  </Router>
)
