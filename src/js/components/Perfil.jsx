// La vista principal de cada perfil. Recibe las propiedades necesarias para
// renderizar un perfil y nada más.
import React, { PropTypes } from 'react'

const propTypes = {
  id: PropTypes.number,
  numero: PropTypes.string
}

const Perfil = ({ id, numero }) => {
  return (
    <div>
      <p>Un perfil con id { id }</p>
      <p>Número: { numero }</p>
    </div>
  )
}

Perfil.propTypes = propTypes

export default Perfil
