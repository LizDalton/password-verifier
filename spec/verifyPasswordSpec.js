var passwordVerifier = require('../index.js');

describe("Test the Verify object", function() {
  it('true if password is over 8 characters.', function() {
    expect(passwordVerifier.verify('bigSmellyDog9')).toBe(true);
  });

  it('throws an type error if under 8 characters.', function() {
    expect(function() { passwordVerifier.verify('bigDog') }).toThrowError(
      TypeError, 'Password is too short'
    );
  });

  it('throws an type error if null.', function() {
    expect(function() { passwordVerifier.verify() }).toThrowError(
      TypeError, 'You must create a password'
    );
  });

  it('throws an error that there are no uppercase letters', function() {
    expect(function() { passwordVerifier.verify('bigsmellydog9') }).toThrowError(
      TypeError, 'You must have at least 1 uppercase letter'
    );
  });

  it('throws an error that there are no lower case letters', function() {
    expect(function() { passwordVerifier.verify('BIGSMELLYDOG9') }).toThrowError(
      TypeError, 'You must have at least 1 lowercase letter'
    );
  });

  it('throws an error that there are no numbers', function() {
    expect(function() { passwordVerifier.verify('bigSmellyDog') }).toThrowError(
      TypeError, 'You must have at least 1 number'
    );
  });
});
