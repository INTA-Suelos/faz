// Conector de Redux entre una lista de Perfiles y el store. Equivalente al
// index del backend. Puede ser paginado, o no.
import React from 'react'
import { connect } from 'react-redux'

import { loadOrFetchPerfiles } from '../actions/perfiles'
import ListaPerfiles from '../components/ListaPerfiles'

class PerfilIndex extends React.Component {
  componentWillMount() {
    // Cargar la página adecuada del store o del backend
    this.props.load()
  }

  render() {
    return <ListaPerfiles perfiles={ this.props.perfiles } />
  }
}

const mapStateToProps = (state, ownProps) => {
  // Query tiene la información de paginación, filtrado y demás. Si no, usamos
  // defaults
  const { filas = 20, pagina = 1 } = ownProps.location.query
  const { entities, paginacion } = state.perfiles
  const perfiles = paginacion && paginacion[filas] && paginacion[filas][pagina] || []

  return {
    perfiles: perfiles.map(id => entities[id])
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { filas = 20, pagina = 1 } = ownProps.location.query

  return {
    load: () => {
      dispatch(loadOrFetchPerfiles(filas, pagina))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfilIndex)
