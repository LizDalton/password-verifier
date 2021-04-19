var checkContent = require('./helpers/checkPasswordContent.js');

const verify = (string) => {
  if (string == null) {
    throw new TypeError('You must create a password')
  } else if (string.length < 8) {
    throw new TypeError('Password is too short')
  } else if (!checkContent.verify(string).includes('upperCase')) {
    throw new TypeError('You must have at least 1 uppercase letter')
  } else if (!checkContent.verify(string).includes('number')) {
    throw new TypeError('You must have at least 1 number')
  } else if (!checkContent.verify(string).includes('lowerCase')) {
    throw new TypeError('You must have at least 1 lowercase letter')
  } else {
    return true
  }
}

module.exports = { verify: verify };
