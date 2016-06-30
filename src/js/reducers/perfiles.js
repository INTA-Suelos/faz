// Resuelve los cambios de estado relacionados con la colección de perfiles del
// store.
import {
  REQUEST_PERFIL, REQUEST_PERFIL_SUCCESS, REQUEST_PERFIL_FAILURE
} from '../actions'

// Esto se va a mergear en el store general como { perfiles: { ... } }
const initialState = {
  fetching: false,
  error: false,
  entities: {}
}

export default function perfiles(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PERFIL:
      return Object.assign({}, state, { fetching: true })
    case REQUEST_PERFIL_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        entities: Object.assign({}, state.entities, {
          [action.id]: action.perfil
        })
      })
    case REQUEST_PERFIL_FAILURE:
      return Object.assign({}, state, { fetching: false, error: true })
    default:
      return state
  }
}
