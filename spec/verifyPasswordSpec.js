var passwordVerifier = require('../index.js');

describe("Test the Verify object", function() {
  it('true if password is over 8 characters.', function() {
    expect(passwordVerifier.verify('bigSmellyDog')).toBe(true);
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
});
