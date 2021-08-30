import { Maybe } from 'shared/maybe';

export function head<T>(array: T[]): Maybe<T> {
  return array.length === 0 ? undefined : array[0];
}

export function tail<T>(array: T[]): Maybe<T> {
  return array.length === 0 ? undefined : array[array.length - 1];
}

export const clamp = (min: number, max: number, value: number): number => {
  return Math.min(max, Math.max(min, value));
};

export const getRange = (
  value: number,
  max: number,
  length: number
): number[] => {
  const maxStart = Math.max(1, max - length + 1);
  const half = Math.floor(length / 2);

  const start = clamp(1, maxStart, value - half);

  return Array(Math.min(length, max))
    .fill(start)
    .map((num, index) => num + index);
};
