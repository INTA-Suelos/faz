// Rutas de la aplicación
//
//   /                 Portada
//   /perfiles         PerfilesIndex
//   /perfiles/:id     Perfil #id
import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from '../containers/App'
import Portada from '../components/Portada'
import PerfilesIndex from '../containers/PerfilesIndex'
import PerfilShow from '../containers/PerfilShow'
import Entrar from '../containers/Entrar'

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={ Portada } />

    { /* TODO Anidar si usan un sublayout común */ }
    <Route path="perfiles" component={ PerfilesIndex } />
    <Route path="perfiles/:id" component={ PerfilShow } />

    <Route path="usuarios/entrar" component={ Entrar } />
  </Route>
)
