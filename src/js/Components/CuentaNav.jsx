import React from 'react'
import { Link } from 'react-router'

export default class CuentaNav extends React.Component {
  render() {
    var registrationLink, loginLink

    if (this.props.logueado) {
      registrationLink = <Link to="/usuarios/editar">Preferencias</Link>
      loginLink = <Link to="/usuarios/salir">Salir</Link>
    } else {
      registrationLink = <Link to="/usuarios/registrarse">Registrarse</Link>
      loginLink = <Link to="/usuarios/entrar">Entrar</Link>
    }

    return(
      <nav id="account">
        <ul role="nav">
          <li>{registrationLink}</li>
          <li>{loginLink}</li>
        </ul>
      </nav>
    )
  }
}
