// Reducer principal para redux, donde se combinan todos los reducers para
// generar un mismo árbol de estado

const initialState = {
  token: null,
  usuario: {}
}

function rootReducer(state = initialState, action) {
  return state
}

export default rootReducer;
