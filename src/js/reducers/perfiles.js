// Resuelve los cambios de estado relacionados con la colección de perfiles del
// store.
import {
  REQUEST_PERFIL, REQUEST_PERFIL_SUCCESS, REQUEST_PERFIL_FAILURE
} from '../actions/perfil'
import {
  REQUEST_PERFILES, REQUEST_PERFILES_SUCCESS, REQUEST_PERFILES_FAILURE
} from '../actions/perfiles'

// Esto se va a mergear en el store general como { perfiles: { ... } }
const initialState = {
  fetching: false,
  error: false,
  entities: {},
  paginacion: {
    20: {
      1: []
    }
  }
}

// Reducer combinado para las acciones de perfiles en general
export default function perfiles(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PERFIL:
    case REQUEST_PERFILES:
      return Object.assign({}, state, { fetching: true })
    case REQUEST_PERFIL_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        entities: entities(state.entities, action)
      })
    case REQUEST_PERFILES_SUCCESS:
      return Object.assign({}, state, {
        fetching: false,
        entities: entities(state.entities, action),
        paginacion: paginacion(state.paginacion, action)
      })
    case REQUEST_PERFIL_FAILURE:
    case REQUEST_PERFILES_FAILURE:
      return Object.assign({}, state, { fetching: false, error: true })
    default:
      return state
  }
}

// Reducer que maneja las acciones para agregar perfiles a `entities`
const entities = (state, action) => {
  switch (action.type) {
    // Si la acción devuelve un perfil, lo agregamos al store
    case REQUEST_PERFIL_SUCCESS:
      return Object.assign({}, state, {
        [action.id]: action.perfil
      })
    // Si la acción devuelve varios perfil, los mapeamos al store
    case REQUEST_PERFILES_SUCCESS:
      perfiles = action.perfiles.reduce((hash, perfil) => {
        return { ...hash, [perfil.id]: perfil }
      }, {})

      return Object.assign({}, state, perfiles)
    default:
      return state
  }
}

const paginacion = (state, action) => {
  switch (action.type) {
    case REQUEST_PERFILES_SUCCESS:
      return Object.assign({}, state, {
        [action.filas]: {
          [action.pagina]: action.perfiles.map(perfil => perfil.id)
        }
      })
    default:
      return state
  }
}
