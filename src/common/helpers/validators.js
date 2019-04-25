export const validateEmail = value => {
  let errorMessage
  if (value.length === 0) {
    errorMessage = 'Cannot be empty'
    return errorMessage
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = 'Invalid email address'
    return errorMessage
  }
}

export const validatePassword = value => {
  let errorMessage
  if (value.length === 0) {
    errorMessage = 'Cannot be empty'
    return errorMessage
  }
  if (value.length < 5) {
    errorMessage = 'Weak password'
    return errorMessage
  }
  if (!/\w*[A-Z]\w*/.test(value)) {
    errorMessage = 'Atleast one Upper Letter'
    return errorMessage
  }
}

export const validateUserName = value => {
  let errorMessage
  if (value.length === 0) {
    errorMessage = 'Cannot be empty'
    return errorMessage
  }
}
