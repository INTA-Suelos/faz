/* La vista principal de cada perfil. Equivalente al show del backend. */
import React from 'react'

export default class Perfil extends React.Component {
  constructor(props) {
    super(props)
    this.state = { perfil: { numero: `perfil id ${props.params.id}` } }
  }

  componentDidMount() {
    // Hardcodear por ahora dev
    fetch(`http://localhost:3000/api/perfiles/${this.props.params.id}`, {
      mode: 'cors',
      headers: {
       'Accept': 'application/json'
      }
    }).then(
      (res) => {
        // .json() devuelve otro Promise, que encadenamos
        res.json().then((json) => {
          this.setState({ perfil: json.perfil })
        })
      },
      () => {
        // FIXME No llega acá con 403, usa el inicial
        this.setState({ perfil: { numero: 'fallo' } })
      }
    )
  }

  render() {
    return (
      <div>
        <p>Un perfil con id { this.props.params.id }</p>
        <p>Número: { this.state.perfil.numero }</p>
      </div>
    )
  }
}
