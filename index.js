const verify = (string) => {
  if (string == null) {
    throw new TypeError('You must create a password')
  } else if (string.length < 8) {
    throw new TypeError('Password is too short')
  } else {
    return true
  }
}

module.exports = { verify: verify };
