import React from 'react'

import Header from './header'
import Footer from './footer'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        { /* Renderiza los hijos que react-router le pasa (las rutas anidadas) */ }
        { this.props.children }
        <Footer />
      </div>
    )
  }
}
