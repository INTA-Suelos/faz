import React from 'react'

export default class Perfil extends React.Component {
  render() {
    return <div>Un perfil con id { this.props.params.id }</div>
  }
}
