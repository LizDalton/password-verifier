var checkContent = require('../modules/checkPasswordContent.js');

describe("Test the Verify object", function() {
  it('returns the unique contents.', function() {
    expect(checkContent.verify('bigSmellyDog9')).toEqual(
      ['lowerCase', 'upperCase', 'number']
    );
  });

  it('returns the unique contents.', function() {
    expect(checkContent.verify('bigsmellydog9')).toEqual(
      ['lowerCase', 'number']
    );
  });
});
