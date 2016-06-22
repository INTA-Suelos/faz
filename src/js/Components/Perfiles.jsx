import React from 'react'
import { Link } from 'react-router'

export default class Perfiles extends React.Component {
  render() {
    return (
      <div>
        <h2>Lista de perfiles</h2>

        <ul>
          <li><Link to="/perfiles/1">perfil 1</Link></li>
        </ul>
      </div>
    )
  }
}
