import React from 'react'
import { Link, IndexLink } from 'react-router'

import Navegacion from './Navegacion'

export default class Header extends React.Component {
  render() {
    return(
      <div id="header">
        {/* TODO Sacar el valor real de algún store */}
        <Navegacion logueado={true} />

        <h1>SiSINTA</h1>
        <ul role="nav">
          <li><IndexLink to="/">Inicio</IndexLink></li>
          <li><Link to="/perfiles">Perfiles</Link></li>
        </ul>
      </div>
    )
  }
}
