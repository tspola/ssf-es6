
const templateLiteralTests = {

  resultIsAString: function(fn) {
    test('your function does not return a string', () => {
      const RESULT = fn();
      expect(typeof(RESULT)).toBe('string');
    });
  },
  resultIsTemplateLiteral: function(fn) {
    test('your string is not using template literal syntax', () => {
      expect(fn.toString().includes('`')).toBe(true)
    })
  },
  resultUsesStringInterpolation: function(fn) {
    test('Your string is still using the "+" and concatenation', () => {
      expect(fn.toString().includes('+')).toBe(false)
    })
  },

};

module.exports = templateLiteralTests