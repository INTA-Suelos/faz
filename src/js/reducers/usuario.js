// Resuelve los cambios de estado relacionados con la información del usuario y
// el token de acceso.
import {
  REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS, REQUEST_LOGIN_FAILURE
} from '../actions/usuario'

const initialState = {
  token: '',
  fetching: false,
  logueado: false,
  usuario: {}
}

export default function usuario(state = initialState, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return { ...state,
        fetching: true
      }
    case REQUEST_LOGIN_SUCCESS:
      return { ...state,
        fetching: false,
        logueado: true,
        token: action.token,
        usuario: action.usuario
      }
    default:
      return state
  }
}
