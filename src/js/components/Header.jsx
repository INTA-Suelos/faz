// Header o Encabezado para toda la aplicación. Incluye los links de manejo de
// cuenta de usuario, una barra de búsqueda y navegación básica.
import React, { PropTypes } from 'react'
import { Link, IndexLink } from 'react-router'

import BusquedaNav from './BusquedaNav'
import CuentaNav from './CuentaNav'

const propTypes = {
  logueado: PropTypes.bool
}

const Header = ({ logueado }) => {
  return (
    <div id="header">
      <BusquedaNav />

      <CuentaNav logueado={ logueado } />

      <h1>SiSINTA</h1>
      <ul role="nav">
        <li><IndexLink to="/">Inicio</IndexLink></li>
        <li><Link to="/perfiles">Perfiles</Link></li>
      </ul>
    </div>
  )
}

Header.propTypes = propTypes

export default Header
