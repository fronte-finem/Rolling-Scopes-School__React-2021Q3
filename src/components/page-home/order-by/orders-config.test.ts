import { INIT_ORDER_STATES, mediaSortToOrderMap } from './orders-config';

describe('Orders Configs', () => {
  it('map should cover all cases', () => {
    expect(mediaSortToOrderMap.size).toEqual(2 * INIT_ORDER_STATES.length);
  });
});
