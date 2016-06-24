import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../components/App'
import Portada from '../components/Portada'
import Perfiles from '../components/Perfiles'
import Perfil from '../components/Perfil'

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Portada } />

    { /* TODO Anidar si usan un sublayout común */ }
    <Route path="perfiles" component={ Perfiles } />
    <Route path="perfiles/:id" component={ Perfil } />
  </Route>
)
