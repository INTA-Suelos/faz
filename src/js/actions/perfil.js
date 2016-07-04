// Tipos de acciones escuchables
export const REQUEST_PERFIL = 'REQUEST_PERFIL'
export const REQUEST_PERFIL_SUCCESS = 'REQUEST_PERFIL_SUCCESS'
export const REQUEST_PERFIL_FAILURE = 'REQUEST_PERFIL_FAILURE'

// Busca un perfil en el backend y dispara las acciones que avisan del flujo de
// datos.
export function fetchPerfil(perfil) {
  // Devolver una función que devuelve una promesa que se va a resolver cuando
  // termine la solicitud al backend. O sea, un thunk en vez de un objeto de
  // acción normal.
  return function (dispatch, getState) {
    // Cortar la acción si ya estamos fetcheando
    if (getState().perfiles.fetching) {
      return Promise.resolve()
    }

    // Notificar a la app que se inicia un request.
    dispatch(requestPerfil(perfil))

    return fetch(`http://localhost:3000/api/perfiles/${perfil}.json`)
      .then(response => response.json())
      // Notificar a la app que el request terminó exitosamente, agregando el
      // resultado como payload de la acción.
      .then(
        json => dispatch(requestPerfilSuccess(perfil, json)),
        err => dispatch(requestPerfilFailure(perfil, err))
      )
  }
}

// Se está iniciando la solicitud de este perfil al server.
function requestPerfil(id) {
  return {
    type: REQUEST_PERFIL,
    id
  }
}

// Llegó una respuesta del server con los datos del perfil.
function requestPerfilSuccess(id, json) {
  return {
    type: REQUEST_PERFIL_SUCCESS,
    perfil: json.perfil,
    id
  }
}

// Hubo un error en la solicitud
function requestPerfilFailure(id, error) {
  return {
    type: REQUEST_PERFIL_FAILURE,
    id,
    error
  }
}

// Si el perfil no está en el store lo pedimos al server
export function loadOrFetchPerfil(perfil) {
  return function (dispatch, getState) {
    if (shouldFetchPerfil(getState(), perfil)) {
      return dispatch(fetchPerfil(perfil))
    }
  }
}

// Decide si es necesario buscar el perfil en el backend o tenemos uno que
// sirve en el store
function shouldFetchPerfil(state, perfil) {
  // TODO Optimizar después
  return true
}
