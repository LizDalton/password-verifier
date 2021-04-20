const checkContent = require('./checkPasswordContent.js')

const passwordGiven = (string) => {
  return (string != null ? true : 'You must create a password')
}

const longPassword = (string) => {
  return (string.length > 8 ? true : 'Password is too short')
}

const upperCaseLetter = (string) => {
  const upperCase = checkContent.verify(string).includes('upperCase')
  return (upperCase ? true : 'You must have at least 1 uppercase letter')
}

const lowerCaseLetter = (string) => {
  const lowerCase = checkContent.verify(string).includes('lowerCase')
  return (lowerCase ? true : 'You must have at least 1 lowercase letter')
}

const number = (string) => {
  const integer = checkContent.verify(string).includes('number')
  return (integer ? true : 'You must have at least 1 number')
}

const allValidations = (string) => {
  return [
    longPassword(string),
    lowerCaseLetter(string),
    upperCaseLetter(string),
    number(string)
  ]
}

const passedValidations = (string) => {
  const validCheck = []
  const values = allValidations(string)
  for (let i = 0; i < values.length; i++) {
    if (values[i] === true) {
      validCheck.push(values[i])
    }
  }
  return validCheck
}

const validationErrors = (string) => {
  const values = allValidations(string)
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== true) {
      throw TypeError(values[i])
    }
  }
}

module.exports = {
  passwordGiven: passwordGiven,
  lowerCaseLetter: lowerCaseLetter,
  passedValidations: passedValidations,
  validationErrors: validationErrors
}
