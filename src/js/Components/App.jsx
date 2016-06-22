import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />

        { /* Contenido. Renderiza los hijos que react-router le pasa (las rutas anidadas) */ }
        { this.props.children }

        <Footer />
      </div>
    )
  }
}
