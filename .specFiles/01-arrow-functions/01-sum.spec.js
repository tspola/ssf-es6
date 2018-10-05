const sum = require('../../challenges/01-arrow-functions/01-sum');
const ArrowFunctionTests = require('../arrow-functions-general.spec')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
ArrowFunctionTests.usesArrowTest(sum);