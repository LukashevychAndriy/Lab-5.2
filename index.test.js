const { test, expect } = require('@jest/globals');
const { getAddition, getAdditionsAmount } = require('./functions');

test('getAdditionsAmount should return the amount of additions that are counted', () => {
  expect(getAdditionsAmount(-2, 0.001)).toBe(4);
});

test('getAddition should return addition that is calculated based on previous addition, x, n', () => {
  expect(getAddition(0.1, -10, 1)).toBe(-0.0003333333333333334);
});
