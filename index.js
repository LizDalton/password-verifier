var checkContent = require('./helpers/checkPasswordContent.js');

const verify = (string) => {
  if (stringPassword(string) == true) {
    return passwordOk(string)
  } else {
    throw TypeError('You must create a password')
  }
}

const passwordOk = (string) => {
  if (validation(string).length < 3 && lowerCaseLetter(string) != true) {
    return validationErrors(string)
  } else {
    return true
  }
}

const validation = (string) => {
  const validCheck = [];
  const values = validatedPassword(string);
  for (var i = 0; i < values.length; i++) {
    if (values[i] == true) {
      validCheck.push(values[i])
    }
  }
  return validCheck
};

const validationErrors = (string) => {
  const values = validatedPassword(string);
  for (var i = 0; i < values.length; i++) {
    if (values[i] != true) {
      throw TypeError(values[i])
    };
  };
};

const validatedPassword = (string) => {
  return [
    longPassword(string),
    lowerCaseLetter(string),
    upperCaseLetter(string),
    number(string)
  ]
};

const stringPassword = (string) => {
  return (string != null ? true : 'You must create a password')
};

const longPassword = (string) => {
  return (string.length > 8 ? true : 'Password is too short')
};

const upperCaseLetter = (string) => {
  upperCase = checkContent.verify(string).includes('upperCase')
  return (upperCase ? true : 'You must have at least 1 uppercase letter')
};

const lowerCaseLetter = (string) => {
  lowerCase = checkContent.verify(string).includes('lowerCase')
  return (lowerCase ? true : 'You must have at least 1 lowercase letter')
};

const number = (string) => {
  integer = checkContent.verify(string).includes('number')
  return (integer ? true : 'You must have at least 1 number')
};

module.exports = { verify: verify };
