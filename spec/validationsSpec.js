const {
  passwordGiven,
  lowerCaseLetter,
  passedValidations,
  validationErrors
} = require('../modules/validations.js')

describe('passwordGiven', function() {
  it('returns true.', function() {
    expect(passwordGiven('bigSmelly')).toBe(true)
  })

  it('returns false.', function() {
    expect(passwordGiven()).toEqual('You must create a password')
  })
})

describe('lowerCaseLetter', function() {
  it('returns true.', function() {
    expect(lowerCaseLetter('bigSmelly')).toBe(true)
  })

  it('returns false.', function() {
    expect(lowerCaseLetter('BIG')).toEqual(
      'You must have at least 1 lowercase letter'
    )
  })
})

describe("passedValidations", function() {
  it('returns true.', function() {
    expect(passedValidations('bigSmelly')).toEqual(
      [true, true, true]
    );
  });
});

describe("validationErrors", function() {
  it('returns true.', function() {
    expect(function() { validationErrors('bigSmelly') }).toThrowError(
      TypeError, 'You must have at least 1 number'
    );
  });
});
