import { MediaSort } from 'services/anilist-api/generated/schema-types';
import { IOrderState, Order, OrderState } from './order-state';

export type OrdersConfig = Record<string, OrderState>;

export const INIT_ORDER_STATES: IOrderState[] = [
  {
    name: 'Popularity',
    state: Order.NONE,
    reverse: true,
    map: {
      [Order.ASC]: MediaSort.Popularity,
      [Order.DESC]: MediaSort.PopularityDesc,
      [Order.NONE]: undefined,
    },
  },
  {
    name: 'Score',
    state: Order.NONE,
    reverse: true,
    map: {
      [Order.ASC]: MediaSort.Score,
      [Order.DESC]: MediaSort.ScoreDesc,
      [Order.NONE]: undefined,
    },
  },
  {
    name: 'Release date',
    state: Order.NONE,
    reverse: true,
    map: {
      [Order.ASC]: MediaSort.StartDate,
      [Order.DESC]: MediaSort.StartDateDesc,
      [Order.NONE]: undefined,
    },
  },
  {
    name: 'Title',
    state: Order.NONE,
    reverse: false,
    map: {
      [Order.ASC]: MediaSort.TitleRomaji,
      [Order.DESC]: MediaSort.TitleRomajiDesc,
      [Order.NONE]: undefined,
    },
  },
];

type MediaSortToOrderMap = Map<MediaSort, IOrderState>;

export const mediaSortToOrderMap: MediaSortToOrderMap = new Map([
  [MediaSort.Popularity, { ...INIT_ORDER_STATES[0], state: Order.ASC }],
  [MediaSort.PopularityDesc, { ...INIT_ORDER_STATES[0], state: Order.DESC }],
  [MediaSort.Score, { ...INIT_ORDER_STATES[1], state: Order.ASC }],
  [MediaSort.ScoreDesc, { ...INIT_ORDER_STATES[1], state: Order.DESC }],
  [MediaSort.StartDate, { ...INIT_ORDER_STATES[2], state: Order.ASC }],
  [MediaSort.StartDateDesc, { ...INIT_ORDER_STATES[2], state: Order.DESC }],
  [MediaSort.TitleRomaji, { ...INIT_ORDER_STATES[3], state: Order.ASC }],
  [MediaSort.TitleRomajiDesc, { ...INIT_ORDER_STATES[3], state: Order.DESC }],
]);
