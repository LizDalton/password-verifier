const verify = (string) => {
  if (string == null) {
    throw new TypeError('You must create a password')
  } else if (string.length < 8) {
    throw new TypeError('Password is too short')
  } else if (!checkContent(string).includes('upperCase')) {
    throw new TypeError('You must have at least 1 uppercase letter')
  } else {
    return true
  }
}

const checkContent = (string) => {
  const chars = string.split('');
  var type = [];
  for (var i = 0; i < chars.length; i++) {
    if (chars[i] == chars[i].toUpperCase()) {
      type.push('upperCase');
    };
  };
  return type
}

module.exports = { verify: verify };
