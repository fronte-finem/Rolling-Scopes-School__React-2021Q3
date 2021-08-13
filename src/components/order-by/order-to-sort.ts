import { MediaSort } from 'services/anilist-api/generated/types';
import { OrderMap, OrderState } from './order-state';

export const ORDER_SORT_MAP: Map<string, Map<OrderState, MediaSort>> = new Map([
  [
    'Popularity',
    new Map<OrderState, MediaSort>([
      [OrderState.ASC, MediaSort.Popularity],
      [OrderState.DESC, MediaSort.PopularityDesc],
    ]),
  ],
  [
    'Score',
    new Map<OrderState, MediaSort>([
      [OrderState.ASC, MediaSort.Score],
      [OrderState.DESC, MediaSort.ScoreDesc],
    ]),
  ],
  [
    'Release date',
    new Map<OrderState, MediaSort>([
      [OrderState.ASC, MediaSort.StartDate],
      [OrderState.DESC, MediaSort.StartDateDesc],
    ]),
  ],
  [
    'Title',
    new Map<OrderState, MediaSort>([
      [OrderState.ASC, MediaSort.TitleRomaji],
      [OrderState.DESC, MediaSort.TitleRomajiDesc],
    ]),
  ],
]);

export const mapOrderSort = (orders: OrderMap): MediaSort[] =>
  Object.entries(orders)
    .map(([key, order]) => ORDER_SORT_MAP.get(key)?.get(order))
    .filter((sort) => sort !== undefined) as MediaSort[];
