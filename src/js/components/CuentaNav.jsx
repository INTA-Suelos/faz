// Links de manejo de cuenta de usuario (login/logout,
// registrarse/preferencias).
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const propTypes = {
  logueado: PropTypes.bool.isRequired
}

const CuentaNav = ({ logueado }) => {
  var registrationLink, loginLink

  if (logueado) {
    loginLink = <Link to="/usuarios/salir">Salir</Link>
  } else {
    loginLink = <Link to="/usuarios/entrar">Entrar</Link>
  }

  return (
    <nav id="account">
      <ul role="nav">
        <li>{loginLink}</li>
      </ul>
    </nav>
  )
}

CuentaNav.propTypes = propTypes

export default CuentaNav
