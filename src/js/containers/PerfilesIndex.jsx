// Conector de Redux entre una lista de Perfiles y el store. Equivalente al
// index del backend. Puede ser paginado, o no.
import { connect } from 'react-redux'

import ListaPerfiles from '../components/ListaPerfiles'

const mapStateToProps = (state, ownProps) => {
  // Query tiene la información de paginación, filtrado y demás
  const { query } = ownProps.location

  return {
    perfiles: [
      { id: 1, numero: 'privado' },
      { id: 3, numero: 'público' },
      { id: 5, numero: 'inexistente' }
    ]
  }
}

export default connect(mapStateToProps)(ListaPerfiles)
