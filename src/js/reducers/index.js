// Reducer principal para redux, donde se combinan todos los reducers para
// generar un mismo árbol de estado
import { combineReducers } from 'redux'

import perfil from './perfil'
import usuario from './usuario'

const rootReducer = combineReducers({
  perfil,
  usuario
})

export default rootReducer;
