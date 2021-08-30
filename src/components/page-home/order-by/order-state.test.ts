import { MediaSort } from 'services/anilist-api/generated/schema-types';
import { Order, OrderState } from './order-state';

const initOrder = new OrderState({
  name: 'test',
  state: Order.NONE,
  map: {
    [Order.NONE]: undefined,
    [Order.ASC]: MediaSort.Trending,
    [Order.DESC]: MediaSort.TrendingDesc,
  },
  reverse: false,
});

describe('Order State', () => {
  it('should reset state', () => {
    let order = new OrderState({ ...initOrder, state: Order.ASC });
    expect(order.reset().state).toBe(Order.NONE);
  });

  it('should cycle state', () => {
    let order = new OrderState(initOrder);
    expect(order.state).toBe(Order.NONE);

    for (let i = 0; i < 100; i++) {
      order = order.next();
      expect(order.state).toBe(Order.ASC);

      order = order.next();
      expect(order.state).toBe(Order.DESC);

      order = order.next();
      expect(order.state).toBe(Order.NONE);
    }
  });

  it('should reverse cycle state', () => {
    let order = new OrderState({ ...initOrder, reverse: true });
    expect(order.state).toBe(Order.NONE);

    for (let i = 0; i < 100; i++) {
      order = order.next();
      expect(order.state).toBe(Order.DESC);

      order = order.next();
      expect(order.state).toBe(Order.ASC);

      order = order.next();
      expect(order.state).toBe(Order.NONE);
    }
  });

  it('should convert to MediaSort', () => {
    let order = new OrderState(initOrder);
    expect(order.state).toBe(Order.NONE);

    order = order.next();
    expect(order.toSort()).toBe(initOrder.map[Order.ASC]);

    order = order.next();
    expect(order.toSort()).toBe(initOrder.map[Order.DESC]);

    order = order.next();
    expect(order.toSort()).toBe(initOrder.map[Order.NONE]);
  });
});
