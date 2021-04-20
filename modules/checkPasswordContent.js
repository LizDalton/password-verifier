const checkContent = (string) => {
  const chars = string.split('')
  const type = []
  for (let i = 0; i < chars.length; i++) {
    type.push(charType(chars[i]))
  };
  return [...new Set(type)]
}

const charType = (char) => {
  if (!isNaN(char * 1)) {
    return 'number'
  } else if (char === char.toUpperCase()) {
    return 'upperCase'
  } else if (char === char.toLowerCase()) {
    return 'lowerCase'
  }
}

module.exports = { verify: checkContent }
