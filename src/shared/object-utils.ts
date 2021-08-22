import { isNone, Maybe } from './maybe';

type ItemsObj = Record<string, Maybe<string>>;
type MaybeItem = [string, Maybe<string>];
type Item = [string, string];

const selectItemWithValue = (item: MaybeItem): item is Item => !!item[1];

const formatItem = ([k, v]: Item) => `${k}: ${v}`;

export const formatObj = (obj: ItemsObj) =>
  Object.entries(obj).filter(selectItemWithValue).map(formatItem).join('\n');

type Prim = boolean | number | string;
type RecItemsObj = { [property: string]: Maybe<Prim | RecItemsObj> };
type MaybeRecItem = [string, Maybe<Prim | RecItemsObj>];
type RecItem = [string, Prim | RecItemsObj];

const PRIM_TYPES = ['boolean', 'number', 'string'];
const isPrim = (x: unknown) => PRIM_TYPES.some((type) => type === typeof x);

const selectRecItemWithValue = (item: MaybeRecItem): item is RecItem =>
  !!item[1];

const formatRecItem =
  (offset = '') =>
  ([k, v]: RecItem): string =>
    `${offset}${k}: ${isPrim(v) ? v : `\n${formatRecObj(v, `  ${offset}`)}`}`;

export const formatRecObj = (
  obj: Maybe<Prim | RecItemsObj>,
  offset = ''
): string => {
  if (isNone(obj)) return '';
  return typeof obj !== 'object'
    ? String(obj)
    : Object.entries(obj)
        .filter(selectRecItemWithValue)
        .map(formatRecItem(offset))
        .join('\n');
};
