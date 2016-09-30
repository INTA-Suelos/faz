// Conector de Redux entre el formulario de login y las acciones
import React from 'react'
import { connect } from 'react-redux'

import LoginForm from '../components/LoginForm'
import { login } from '../actions/usuario'

class Entrar extends React.Component {
  render() {
    // Recibe el dispatch para enviar las credenciales
    return <LoginForm onSubmit={ this.props.onSubmit } />
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (credenciales) => {
      dispatch(login(credenciales))
    }
  }
}

export default connect(null, mapDispatchToProps)(Entrar)
