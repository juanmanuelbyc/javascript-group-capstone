const sum = require('./sum.js');

test('adds 1+2', () => {
  expect(sum(1, 2)).toBe(3);
});
