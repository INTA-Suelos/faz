import {
  SHOW_PERFIL,
  REQUEST_PERFIL, REQUEST_PERFIL_SUCCESS, REQUEST_PERFIL_FAILURE
} from '../actions'

const initialState = {
  perfil: null
}

export default function perfil(state = initialState, action) {
  switch (action.type) {
    case SHOW_PERFIL:
    case REQUEST_PERFIL:
    case REQUEST_PERFIL_SUCCESS:
    case REQUEST_PERFIL_FAILURE:
      return action.perfil
    default:
      return state
  }
}
