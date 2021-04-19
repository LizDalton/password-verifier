const verify = (string) => {
  if (string == null) {
    throw new TypeError('You must create a password')
  } else if (string.length < 8) {
    throw new TypeError('Password is too short')
  } else if (!checkContent(string).includes('upperCase')) {
    throw new TypeError('You must have at least 1 uppercase letter')
  } else if (!checkContent(string).includes('number')) {
    throw new TypeError('You must have at least 1 number')
  } else if (!checkContent(string).includes('lowerCase')) {
    throw new TypeError('You must have at least 1 lowercase letter')
  } else {
    return true
  }
}

const checkContent = (string) => {
  const chars = string.split('');
  var type = [];
  for (var i = 0; i < chars.length; i++) {
    type.push(charType(chars[i]));
  };
  return type
}

const charType = (char) => {
  if (!isNaN(char * 1)) {
    return 'number'
  } else if (char == char.toUpperCase()) {
    return 'upperCase'
  } else if (char == char.toLowerCase()) {
    return 'lowerCase'
  }
}

module.exports = { verify: verify };
