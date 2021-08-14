import { MediaSort } from 'services/anilist-api/generated/types';
import { IOrderState, Order, OrderState } from './order-state';

export type OrdersConfig = Record<string, OrderState>;

export const getConfig = (states: IOrderState[]): OrdersConfig =>
  states.reduce((acc, init) => {
    acc[init.name] = new OrderState(init);
    return acc;
  }, {} as OrdersConfig);

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
