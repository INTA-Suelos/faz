import React from 'react'
import { Link, IndexLink } from 'react-router'

import BusquedaNav from './BusquedaNav'
import CuentaNav from './CuentaNav'

export default class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <BusquedaNav />
        {/* TODO Sacar el valor real de algún store */}
        <CuentaNav logueado={false} />

        <h1>SiSINTA</h1>
        <ul role="nav">
          <li><IndexLink to="/">Inicio</IndexLink></li>
          <li><Link to="/perfiles">Perfiles</Link></li>
        </ul>
      </div>
    )
  }
}
