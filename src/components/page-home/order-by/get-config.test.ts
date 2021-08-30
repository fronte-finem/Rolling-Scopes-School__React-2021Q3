import { getConfig } from './get-config';
import { MediaSort } from 'services/anilist-api/generated/schema-types';
import { INIT_ORDER_STATES, mediaSortToOrderMap } from './orders-config';
import { Order } from './order-state';

describe('Get Config', () => {
  it('should inits by Order.NONE', () => {
    const config = getConfig(INIT_ORDER_STATES);
    expect(
      Object.values(config).every((conf) => conf.state === Order.NONE)
    ).toBe(true);
  });

  it('should apply preset', () => {
    const preset = MediaSort.ScoreDesc;
    const config = getConfig(INIT_ORDER_STATES, preset);
    expect(
      Object.values(config).find(
        (conf) => conf.name === mediaSortToOrderMap.get(preset)?.name
      )?.state === Order.DESC
    ).toBe(true);
  });
});
