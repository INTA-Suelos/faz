// Conector de Redux entre cada Perfil y el store. Equivalente al show del
// backend. Carga los datos del perfil a mostrar del store, si está fetcheado.
// TODO En caso contrario lo pide al server.
import React from 'react'
import { connect } from 'react-redux'

import { loadOrFetchPerfil } from '../actions'
import Perfil from '../components/Perfil'

class PerfilShow extends React.Component {
  componentWillMount() {
    // Cargar el perfil del store o del backend
    this.props.load()
  }

  render() {
    return <Perfil {...this.props.perfil} />
  }
}

// TODO Usar un selector (con reselect) para filtrar el state a las propiedades
// indispensables
const mapStateToProps = (state, ownProps) => {
  const { entities } = state.perfiles
  return {
    perfil: entities[ownProps.params.id]
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: () => {
      dispatch(loadOrFetchPerfil(ownProps.params.id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PerfilShow)
