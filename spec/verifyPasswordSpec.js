var passwordVerifier = require('../index.js');

describe("Test the Verify object", function() {
  it('true if password is over 8 characters.', function() {
    expect(passwordVerifier.verify('bigSmellyDog9')).toBe(true);
  });

  it('throws an type error if under 8 characters.', function() {
    expect(function() { passwordVerifier.verify('1') }).toThrowError(
      TypeError, 'Password is too short'
    );
  });

  it('throws an type error if null.', function() {
    expect(function() { passwordVerifier.verify() }).toThrowError(
      TypeError, 'You must create a password'
    );
  });

  it('returns true when more than 3 validations pass', function() {
    expect(passwordVerifier.verify('bigsmellydog')).toBe(true);
  });

  it('throws an error that there are no lower case letters', function() {
    expect(function() { passwordVerifier.verify('BIGSMELLYDOG') }).toThrowError(
      TypeError, 'You must have at least 1 lowercase letter'
    );
  });

  it('throws an error if there are more than 3 things wrong', function() {
    expect(function() { passwordVerifier.verify('1') }).toThrowError(
      TypeError, 'Password is too short'
    );
  });
});
