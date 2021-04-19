const verify = (string) => {
  if (string.length > 8 ) {
    return true
  } else {
    throw new TypeError('Password is too short')
  }
}

module.exports = { verify: verify };
