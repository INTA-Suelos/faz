/* Una lista de perfiles, equivalente al index del backend. Puede ser paginado,
 * o no. */
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const propTypes = {
  perfiles: PropTypes.array.isRequired
}

const PerfilesIndex = ({ perfiles }) => {
  return (
    <div>
      <h2>Lista de perfiles</h2>

      <ul>
        { perfiles.map(id =>
            <li key={ id }>
              <Link to={`/perfiles/${id}`}>{`Perfil ${id}`}</Link>
            </li>
        ) }
      </ul>
    </div>
  )
}

PerfilesIndex.propTypes = propTypes

export default PerfilesIndex
