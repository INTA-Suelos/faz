import React from 'react'

import Header from './header'
import Footer from './footer'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        El contenido va aquí!
        <Footer />
      </div>
    )
  }
}
