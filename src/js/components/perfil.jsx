import React from 'react'

export default class Perfil extends React.Component {
  constructor(props) {
    super(props)
    this.state = { perfil: { numero: `perfil id ${props.params.id}` } }
  }

  componentDidMount() {
    // Hardcodear por ahora dev
    fetch(`http://localhost:3000/perfiles/${this.props.params.id}`, {
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
