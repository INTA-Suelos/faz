import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../components/App'
import Portada from '../components/Portada'
import PerfilesIndex from '../components/PerfilesIndex'
import Perfil from '../components/Perfil'

// Temporal
const perfil_ids = [1, 3, 5]

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Portada } />

    { /* TODO Anidar si usan un sublayout común */ }
    <Route path="perfiles" component={ () => ( <PerfilesIndex perfiles={ perfil_ids } /> ) } />
    <Route path="perfiles/:id" component={ Perfil } />
  </Route>
)
