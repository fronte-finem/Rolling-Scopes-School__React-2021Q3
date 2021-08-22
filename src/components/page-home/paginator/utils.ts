import { Maybe } from 'shared/maybe';

export function head<T>(array: T[]): Maybe<T> {
  return array.length === 0 ? undefined : array[0];
}

export function tail<T>(array: T[]): Maybe<T> {
  return array.length === 0 ? undefined : array[array.length - 1];
}

export const getRange = (
  current: number,
  last: number,
  length: number
): number[] => {
  let maxStart = last - length + 1;
  maxStart = maxStart < 1 ? 1 : maxStart;

  let minEnd = length - 1;
  minEnd = minEnd > last ? last : minEnd;

  const half = Math.floor(length / 2);

  let start = current - half;
  start = start < 1 ? 1 : start;
  start = start > maxStart ? maxStart : start;

  let end = start + length - 1;
  end = end > last ? last : end;
  end = end < minEnd ? minEnd : end;

  // console.log(current, last, length, ' => ', maxStart, minEnd, start, end);

  return Array(end + 1 - start)
    .fill(start)
    .map((num, index) => num + index);
};

// console.log(getRange(1, 13, 5));
// console.log(getRange(3, 13, 5));
// console.log(getRange(5, 13, 5));
// console.log(getRange(7, 13, 5));
// console.log(getRange(9, 13, 5));
// console.log(getRange(11, 13, 5));
// console.log(getRange(13, 13, 5));
