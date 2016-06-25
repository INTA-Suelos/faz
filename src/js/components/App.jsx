/* Layout principal para la aplicación. Contiene subcomponentes que son
 * visibles en cada página, como el Header. */
import React from 'react'

import Header from './Header'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />

        { /* Contenido. Renderiza los hijos que react-router le pasa (las rutas anidadas) */ }
        { this.props.children }
      </div>
    )
  }
}
