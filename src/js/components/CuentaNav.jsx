/* Links de manejo de cuenta de usuario (login/logout,
 * registrarse/preferencias). */
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const propTypes = {
  logueado: PropTypes.bool.isRequired
}

const CuentaNav = ({ logueado }) => {
  var registrationLink, loginLink

  if (logueado) {
    registrationLink = <Link to="/usuarios/editar">Preferencias</Link>
    loginLink = <Link to="/usuarios/salir">Salir</Link>
  } else {
    registrationLink = <Link to="/usuarios/registrarse">Registrarse</Link>
    loginLink = <Link to="/usuarios/entrar">Entrar</Link>
  }

  return (
    <nav id="account">
      <ul role="nav">
        <li>{registrationLink}</li>
        <li>{loginLink}</li>
      </ul>
    </nav>
  )
}

CuentaNav.propTypes = propTypes

export default CuentaNav
