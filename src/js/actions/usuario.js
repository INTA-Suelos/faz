// Acciones del ciclo de vida para loguear un usuario
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS'
export const REQUEST_LOGIN_FAILURE = 'REQUEST_LOGIN_FAILURE'

// Intenta loguear un usuario según las credenciales (usuario y password)
export function login(credenciales) {
  // Devolver una función que devuelve una promesa que se va a resolver cuando
  // termine la solicitud al backend. O sea, un thunk en vez de un objeto de
  // acción normal.
  return function (dispatch, getState) {
    // Cortar la acción si ya estamos fetcheando
    if (getState().usuario.fetching) {
      return Promise.resolve()
    }

    // Notificar a la app que se inicia un request.
    dispatch(requestLogin(credenciales))

    // Configurar la solicitud
    let config = {
      method: 'POST',
      headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      },
      body: `usuario[email]=${credenciales.email}&usuario[password]=${credenciales.password}`
    }

    return fetch('http://localhost:3000/usuarios/sign_in', config)
      .then(response => response.json())
      // Notificar a la app que el request terminó exitosamente, agregando el
      // resultado como payload de la acción.
      .then(
        json => dispatch(requestLoginSuccess(json)),
        err => dispatch(requestLoginFailure(credenciales, err))
      )
  }
}

// Se está iniciando la solicitud de sesión al server
function requestLogin(credenciales) {
  return {
    type: REQUEST_LOGIN,
    credenciales
  }
}

// Llegó una respuesta del server válida con los datos de usuario
function requestLoginSuccess(json) {
  return {
    type: REQUEST_LOGIN_SUCCESS,
    usuario: json.usuario,
    token: json.token
  }
}

// Hubo un error en la solicitud
function requestLoginFailure(credenciales, error) {
  return {
    type: REQUEST_LOGIN_FAILURE,
    credenciales,
    error
  }
}

// Si el usuario no está logueado o vigente lo pedimos al server
export function loadOrLogin(credenciales) {
  return function (dispatch, getState) {
    if (shouldLoginUsuario(getState(), credenciales)) {
      return dispatch(loginUsuario(credenciales))
    }
  }
}

// Decide si es necesario refrescar la sesión
function shouldLogin(state, credenciales) {
  // TODO Optimizar después
  return true
}
