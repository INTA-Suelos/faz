// Tipos de acciones escuchables
export const REQUEST_PERFILES = 'REQUEST_PERFILES'
export const REQUEST_PERFILES_SUCCESS = 'REQUEST_PERFILES_SUCCESS'
export const REQUEST_PERFILES_FAILURE = 'REQUEST_PERFILES_FAILURE'

// Busca una página de perfiles en el backend y dispara las acciones que avisan
// del flujo de datos.
export function fetchPerfiles(filas, pagina) {
  // Devolver una función que devuelve una promesa que se va a resolver cuando
  // termine la solicitud al backend. O sea, un thunk en vez de un objeto de
  // acción normal.
  return function (dispatch, getState) {
    // Cortar la acción si ya estamos fetcheando
    if (getState().perfiles.fetching) {
      return Promise.resolve()
    }

    // Notificar a la app que se inicia un request.
    dispatch(requestPerfiles(filas, pagina))

    return fetch(`http://localhost:3000/api/perfiles.json?filas=${filas}&pagina=${pagina}`)
      .then(response => response.json())
      // Notificar a la app que el request terminó exitosamente, agregando el
      // resultado como payload de la acción.
      .then(
        json => dispatch(requestPerfilesSuccess(filas, pagina, json)),
        err => dispatch(requestPerfilesFailure(filas, pagina, err))
      )
  }
}

// Se está iniciando la solicitud de esta página al server.
function requestPerfiles(filas, pagina) {
  return {
    type: REQUEST_PERFILES,
    filas,
    pagina
  }
}

// Llegó una respuesta del server con los datos de la página.
function requestPerfilesSuccess(filas, pagina, json) {
  return {
    type: REQUEST_PERFILES_SUCCESS,
    perfiles: json,
    filas,
    pagina
  }
}

// Hubo un error en la solicitud
function requestPerfilesFailure(filas, pagina, error) {
  return {
    type: REQUEST_PERFILES_FAILURE,
    filas,
    pagina,
    error
  }
}

// Si la página no está en el store la pedimos al server
export function loadOrFetchPerfiles(filas, pagina) {
  return function (dispatch, getState) {
    if (shouldFetchPerfiles(getState(), filas, pagina)) {
      return dispatch(fetchPerfiles(filas, pagina))
    }
  }
}

// Decide si es necesario buscar el perfil en el backend o tenemos datos que
// sirve en el store
function shouldFetchPerfiles(state, filas, pagina) {
  // TODO Optimizar después
  return true
}
