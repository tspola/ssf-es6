
 ArrowFunctionTests = {

  usesArrowTest: function(fn) {
    test('multiplyBy10 is an arrow funciton', ()=> {
      expect(fn.toString().includes('function')).toBe(false)
    }); 
  },
  usesImplicitReturn: function(fn) {
    test('multiplyBy10 should not have an explicit return statment', ()=> {
      expect(fn.toString().includes('return')).toBe(false)
    });
  },
  doesNotUseParens: function(fn) {
    test('multiplyBy10 should have 1 paramater called num ', ()=>{
      expect(fn.toString().includes('num')).toBe(true)
    })
    test('multiplyBy10 should not have parentheses for 1 paramater', ()=> {
      expect(fn.toString().includes('(num)')).toBe(false)
    });
  },
};

module.exports = ArrowFunctionTests;