import { IOrderState, OrderState } from './order-state';
import { Maybe } from 'shared/maybe';
import { MediaSort } from 'services/anilist-api/generated/schema-types';
import { mediaSortToOrderMap, OrdersConfig } from './orders-config';

export const getConfig = (
  states: IOrderState[],
  mediaSort?: Maybe<MediaSort>
): OrdersConfig => {
  const preset = mediaSort ? mediaSortToOrderMap.get(mediaSort) : null;
  return states.reduce((acc, init) => {
    acc[init.name] = new OrderState(preset?.name === init.name ? preset : init);
    return acc;
  }, {} as OrdersConfig);
};
