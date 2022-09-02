const itemsCount = require ('./modules/itemsCount.js');

const arrayLength0 = [];
const arrayLength3 = [1, 2, 3];
const arrayLength10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayLength6 = [1, 2, 3, 4, 5, 6];

describe('items counter test', () => {
 test('Array length 0 test', () => {
   expect(itemsCount(arrayLength0)).toBe(0);
 });
 test('Array length 3 test', () => {
  expect(itemsCount(arrayLength3)).toBe(3);
});
test('Array length 10 test', () => {
 expect(itemsCount(arrayLength10)).toBe(10);
});
test('Array length 6 test', () => {
 expect(itemsCount(arrayLength6)).toBe(6);
});
});