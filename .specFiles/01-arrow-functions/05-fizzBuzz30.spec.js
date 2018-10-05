const fizzBuzz30 = require('../../challenges/01-arrow-functions/05-fizzBuzz30');
const ArrowFunctionTests = require('../arrow-functions-general.spec')

test('divides 30 by 2 to reach 15', () => {
  expect(Array.isArray(fizzBuzz30())).toBe(true);
});
ArrowFunctionTests.usesArrowTest(fizzBuzz30);
test('the 14th index should be "fizzbuzz"', () => {
  const RESULT = fizzBuzz30()
  console.log(RESULT)
  expect(RESULT[14]).toBe('fizzbuzz');
});