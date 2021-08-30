import { isNone, isValue, mapGetter, Maybe, MaybeUtils, Op } from './maybe';

describe('Maybe isNone', () => {
  it('should check none values', () => {
    expect(isNone(undefined)).toBeTruthy();
    expect(isNone(null)).toBeTruthy();
  });

  it('should check real values', () => {
    expect(isNone(false)).toBeFalsy();
    expect(isNone(0)).toBeFalsy();
    expect(isNone('')).toBeFalsy();
  });
});

describe('Maybe isValue', () => {
  it('should check none values', () => {
    expect(isValue(undefined)).toBeFalsy();
    expect(isValue(null)).toBeFalsy();
  });

  it('should check real values', () => {
    expect(isValue(false)).toBeTruthy();
    expect(isValue(0)).toBeTruthy();
    expect(isValue('')).toBeTruthy();
  });
});

describe('mapGetter', () => {
  const testMap = new Map<number, string>([
    [NaN, 'Not a number'],
    [0, 'Zero'],
    [42, 'Answer'],
  ]);

  it('should safe work with map', () => {
    expect(mapGetter(testMap)(null)).toBeNull();
    expect(mapGetter(testMap)(undefined)).toBeUndefined();
    expect(mapGetter(testMap)(NaN)).toEqual('Not a number');
    expect(mapGetter(testMap)(0)).toEqual('Zero');
    expect(mapGetter(testMap)(42)).toEqual('Answer');
    expect(mapGetter(testMap)(123)).toBeUndefined();
  });
});

describe('MaybeUtils', () => {
  type VarMap = (x: Maybe<number>) => (op: Op<number, string>) => Maybe<string>;
  const numToStr: Op<number, string> = (x: number) => `${x}`;

  it('"funcMap" should safe work with optional values', () => {
    const lifted = MaybeUtils.funcMap(numToStr);
    expect(lifted(null)).toBeNull();
    expect(lifted(undefined)).toBeUndefined();
    expect(lifted(NaN)).toEqual('NaN');
    expect(lifted(0)).toEqual('0');
    expect(lifted(42)).toEqual('42');
  });

  it('"varMap" should safe work with optional values', () => {
    const varMap: VarMap = MaybeUtils.varMap;
    expect(varMap(null)(numToStr)).toBeNull();
    expect(varMap(undefined)(numToStr)).toBeUndefined();
    expect(varMap(NaN)(numToStr)).toEqual('NaN');
    expect(varMap(0)(numToStr)).toEqual('0');
    expect(varMap(42)(numToStr)).toEqual('42');
  });

  it('"strictMap" should safe work with optional values', () => {
    expect(MaybeUtils.strictMap(null, numToStr)).toBeNull();
    expect(MaybeUtils.strictMap(undefined, numToStr)).toBeUndefined();
    expect(MaybeUtils.strictMap(NaN, numToStr)).toEqual('NaN');
    expect(MaybeUtils.strictMap(0, numToStr)).toEqual('0');
    expect(MaybeUtils.strictMap(42, numToStr)).toEqual('42');
  });

  it('"apply" should safe work with optional values', () => {
    expect(MaybeUtils.apply(null)(null)).toBeNull();
    expect(MaybeUtils.apply(null)(undefined)).toBeNull();
    expect(MaybeUtils.apply(null)(0)).toBeNull();
    expect(MaybeUtils.apply(null)(NaN)).toBeNull();
    expect(MaybeUtils.apply(null)(42)).toBeNull();

    expect(MaybeUtils.apply(undefined)(null)).toBeUndefined();
    expect(MaybeUtils.apply(undefined)(undefined)).toBeUndefined();
    expect(MaybeUtils.apply(undefined)(0)).toBeUndefined();
    expect(MaybeUtils.apply(undefined)(NaN)).toBeUndefined();
    expect(MaybeUtils.apply(undefined)(42)).toBeUndefined();

    expect(MaybeUtils.apply(numToStr)(null)).toBeNull();
    expect(MaybeUtils.apply(numToStr)(undefined)).toBeUndefined();
    expect(MaybeUtils.apply(numToStr)(NaN)).toEqual('NaN');
    expect(MaybeUtils.apply(numToStr)(0)).toEqual('0');
    expect(MaybeUtils.apply(numToStr)(42)).toEqual('42');
  });

  it('"bind" should safe work with optional values', () => {
    type GetMaybeStr = (x: number) => Maybe<string>;
    const getStr1: GetMaybeStr = (_) => null;
    const getStr2: GetMaybeStr = (_) => undefined;
    const getStr3: GetMaybeStr = (x) => `${x}`;

    expect(MaybeUtils.bind(getStr1)(null)).toBeNull();
    expect(MaybeUtils.bind(getStr2)(null)).toBeNull();
    expect(MaybeUtils.bind(getStr3)(null)).toBeNull();

    expect(MaybeUtils.bind(getStr1)(undefined)).toBeUndefined();
    expect(MaybeUtils.bind(getStr2)(undefined)).toBeUndefined();
    expect(MaybeUtils.bind(getStr3)(undefined)).toBeUndefined();

    expect(MaybeUtils.bind(getStr1)(NaN)).toBeNull();
    expect(MaybeUtils.bind(getStr2)(NaN)).toBeUndefined();
    expect(MaybeUtils.bind(getStr3)(NaN)).toEqual('NaN');

    expect(MaybeUtils.bind(getStr1)(0)).toBeNull();
    expect(MaybeUtils.bind(getStr2)(0)).toBeUndefined();
    expect(MaybeUtils.bind(getStr3)(0)).toEqual('0');

    expect(MaybeUtils.bind(getStr1)(42)).toBeNull();
    expect(MaybeUtils.bind(getStr2)(42)).toBeUndefined();
    expect(MaybeUtils.bind(getStr3)(42)).toEqual('42');
  });
});
