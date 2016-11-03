// Layout principal para la aplicación. Contiene subcomponentes que son
// visibles en cada página, como el Header.
import React from 'react'
import { connect } from 'react-redux'

import Header from '../components/Header'

class App extends React.Component {
  render() {
    return(
      <div>
        <Header logueado={ this.props.logueado }/>

        { /* Contenido. Renderiza los hijos que react-router le pasa (las rutas anidadas) */ }
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { children } = ownProps
  const { logueado } = state.usuario

  return { children, logueado }
}

export default connect(mapStateToProps)(App)
