// Una lista de perfiles con información pública
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

// TODO `perfiles` debe ser un array de objetos con id y numero
const propTypes = {
  perfiles: PropTypes.array.isRequired
}

const ListaPerfiles = ({ perfiles }) => {
  return (
    <div>
      <h2>Lista de perfiles</h2>

      <ul>{ 
        perfiles.map(
          ({ id, numero }) =>
            <li key={ id }>
              <Link to={`/perfiles/${id}`}>{`Perfil ${numero}`}</Link>
            </li>
        )
      }</ul>
    </div>
  )
}

ListaPerfiles.propTypes = propTypes

export default ListaPerfiles
