import { LOGIN, LOGOUT } from './actionTypes'

export function doLoginAction(values) {
  const { email, password } = values
  return {
    type: LOGIN,
    payload: { email, password }
  }
}

export function doLogout() {
  return {
    type: LOGOUT
  }
}
