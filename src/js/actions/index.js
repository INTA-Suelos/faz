export const SHOW_PERFIL = 'SHOW_PERFIL'
export const REQUEST_PERFIL = 'REQUEST_PERFIL'
export const REQUEST_PERFIL_SUCCESS = 'REQUEST_PERFIL_SUCCESS'
export const REQUEST_PERFIL_FAILURE = 'REQUEST_PERFIL_FAILURE'

// Representa el usuario clickeando un link a un perfil
export function showPerfil(perfil) {
  return {
    type: SHOW_PERFIL,
    perfil: perfil
  }
}

// Representa la solicitud de este perfil al server
export function requestPerfil(perfil) {
  return {
    type: REQUEST_PERFIL,
    perfil: perfil
  }
}

// Representa la respuesta del server con los datos del perfil
export function requestPerfilSuccess(perfil, json) {
  return {
    type: REQUEST_PERFIL_SUCCESS,
    perfil: perfil,
    data: json
  }
}

// Representa la respuesta del server en caso de error
export function requestPerfilFailures(perfil, json) {
  return {
    type: REQUEST_PERFIL_FAILURE,
    perfil: perfil,
    data: json
  }
}
