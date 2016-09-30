// Acciones del ciclo de vida para buscar una página (definida en forma de
// búsqueda o `search`) de perfiles
export const REQUEST_PERFILES = 'REQUEST_PERFILES'
export const REQUEST_PERFILES_SUCCESS = 'REQUEST_PERFILES_SUCCESS'
export const REQUEST_PERFILES_FAILURE = 'REQUEST_PERFILES_FAILURE'

// Busca una página de perfiles en el backend y dispara las acciones que avisan
// del flujo de datos.
export function fetchPerfiles(search) {
  // Devolver una función que devuelve una promesa que se va a resolver cuando
  // termine la solicitud al backend. O sea, un thunk en vez de un objeto de
  // acción normal.
  return function (dispatch, getState) {
    // Cortar la acción si ya estamos fetcheando
    if (getState().perfiles.fetching) {
      return Promise.resolve()
    }

    // Notificar a la app que se inicia un request.
    dispatch(requestPerfiles(search))

    return fetch(`http://localhost:3000/api/perfiles.json${search}`)
      .then(response => response.json())
      // Notificar a la app que el request terminó exitosamente, agregando el
      // resultado como payload de la acción.
      .then(
        json => dispatch(requestPerfilesSuccess(search, json)),
        err => dispatch(requestPerfilesFailure(search, err))
      )
  }
}

// Se está iniciando la solicitud de esta página al server.
function requestPerfiles(search) {
  return {
    type: REQUEST_PERFILES,
    search
  }
}

// Llegó una respuesta del server con los datos de la página.
function requestPerfilesSuccess(search, json) {
  return {
    type: REQUEST_PERFILES_SUCCESS,
    perfiles: json,
    search
  }
}

// Hubo un error en la solicitud
function requestPerfilesFailure(search, error) {
  return {
    type: REQUEST_PERFILES_FAILURE,
    search,
    error
  }
}

// Si la página no está en el store la pedimos al server
export function loadOrFetchPerfiles(search) {
  return function (dispatch, getState) {
    if (shouldFetchPerfiles(getState(), search)) {
      return dispatch(fetchPerfiles(search))
    }
  }
}

// Decide si es necesario buscar el perfil en el backend o tenemos datos que
// sirve en el store
function shouldFetchPerfiles(state, search) {
  // TODO Optimizar después
  return true
}
