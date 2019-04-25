export const selectLoginState = state => {
  return state.login && state.login.isLoggedIn
}

export const selectUserInfo = state => {
  return state.login && state.login.userData && state.login.userData.email
}

export const selectErrorMessage = state => {
  if (state.login && state.login.error) return state.login.message
  if (state.login && state.login.fetching) return 'Loading...'
  if (state.login && state.login.success) return ''
  else return ''
}
