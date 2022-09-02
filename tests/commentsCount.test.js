import commentsCounter from '../src/modules/commentsCounter.js';

const test0 = [];
const test1 = [1];
const test2 = [1, 2];
const test3 = [1, 2, 3];
const test4 = [1, 2, 3, 4];

describe('Comments Counter Test', () => {
  test('zero length array', () => {
    expect(commentsCounter(test0)).toBe(0);
  });
  test('one length array', () => {
    expect(commentsCounter(test1)).toBe(1);
  });
  test('two length array', () => {
    expect(commentsCounter(test2)).toBe(2);
  });
  test('three length array', () => {
    expect(commentsCounter(test3)).toBe(3);
  });
  test('four length array', () => {
    expect(commentsCounter(test4)).toBe(4);
  });
});
