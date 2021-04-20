const {
  passwordGiven,
  lowerCaseLetter,
  passedValidations,
  validationErrors
} = require('./modules/validations.js')

const verify = (string) => {
  if (passwordGiven(string) === true) {
    return passwordOk(string)
  } else {
    throw TypeError('You must create a password')
  }
}

const passwordOk = (string) => {
  if (passedValidations(string).length < 3 && lowerCaseLetter(string) !== true) {
    return validationErrors(string)
  } else {
    return true
  }
}

module.exports = { verify: verify }
