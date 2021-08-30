import { getRange, head, tail } from './utils';

describe('head & tail', () => {
  it('head should return first value or undefined', () => {
    expect(head([])).toBeUndefined();
    expect(head([3, 2, 1])).toBe(3);
  });

  it('tail should return last value or undefined', () => {
    expect(tail([])).toBeUndefined();
    expect(tail([1, 2, 3])).toBe(3);
  });
});

describe('getRange', () => {
  it('should return empty range if length < 1', () => {
    expect(getRange(1, 42, 0)).toEqual([]);
  });

  it('should return unit range if length === 1', () => {
    expect(getRange(1, 42, 1)).toEqual([1]);
    expect(getRange(24, 42, 1)).toEqual([24]);
    expect(getRange(42, 42, 1)).toEqual([42]);
  });

  it('should constrain range => [1, max]', () => {
    expect(getRange(0, 42, 1)).toEqual([1]);
    expect(getRange(43, 42, 1)).toEqual([42]);
  });

  it('should return same range if length >= max', () => {
    const max = 3;
    const length = 4;
    const range = [1, 2, 3];
    expect(getRange(1, max, length)).toEqual(range);
    expect(getRange(2, max, length)).toEqual(range);
    expect(getRange(3, max, length)).toEqual(range);
    expect(getRange(4, max, length)).toEqual(range);
  });

  const max = 13;
  const length = 5;

  it('should return head of range', () => {
    const range = [1, 2, 3, 4, 5];
    expect(getRange(1, max, length)).toEqual(range);
    expect(getRange(2, max, length)).toEqual(range);
    expect(getRange(3, max, length)).toEqual(range);
  });

  it('should return tail of range', () => {
    const range = [9, 10, 11, 12, 13];
    expect(getRange(11, max, length)).toEqual(range);
    expect(getRange(12, max, length)).toEqual(range);
    expect(getRange(13, max, length)).toEqual(range);
  });

  it('should return range with value in middle', () => {
    expect(getRange(4, max, length)).toEqual([2, 3, 4, 5, 6]);
    expect(getRange(5, max, length)).toEqual([3, 4, 5, 6, 7]);
    expect(getRange(6, max, length)).toEqual([4, 5, 6, 7, 8]);
    expect(getRange(7, max, length)).toEqual([5, 6, 7, 8, 9]);
    expect(getRange(8, max, length)).toEqual([6, 7, 8, 9, 10]);
    expect(getRange(9, max, length)).toEqual([7, 8, 9, 10, 11]);
    expect(getRange(10, max, length)).toEqual([8, 9, 10, 11, 12]);
  });
});
