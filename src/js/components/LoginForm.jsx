// Formulario de login
import React, { PropTypes } from 'react'

export default class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={ (evento) => this.handleSubmit(evento) }>
        <input type="text" ref="email" placeholder="Email" />
        <input type="password" ref="password" placeholder="Password" />

        <button type="submit">Entrar</button>
      </form>
    )
  }

  // Handler
  handleSubmit(evento) {
    // Impedir que el navegador procese el form
    evento.preventDefault()

    const email = this.refs.email
    const password = this.refs.password

    this.props.onSubmit({
      email: email.value,
      password: password.value
    })
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
