// Reducer principal para redux, donde se combinan todos los reducers para
// generar un mismo árbol de estado
import { combineReducers } from 'redux'

import perfiles from './perfiles'
import usuario from './usuario'

const rootReducer = combineReducers({
  perfiles,
  usuario
})

export default rootReducer;
