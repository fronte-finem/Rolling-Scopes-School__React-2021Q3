import { MediaSort } from 'services/anilist-api/generated/schema-types';

export enum Order {
  NONE = 'none',
  ASC = 'asc',
  DESC = 'desc',
}

export interface IOrderState {
  readonly name: string;
  readonly state: Order;
  readonly reverse: boolean;
  readonly map: OrderToSort;
}

export type OrderToSort = Record<Order, MediaSort | undefined>;

export class OrderState implements IOrderState {
  public readonly name: string;
  public readonly state: Order;
  public readonly reverse: boolean;
  public readonly map: OrderToSort;

  constructor({ name, state, reverse, map }: IOrderState) {
    this.name = name;
    this.state = state;
    this.reverse = reverse;
    this.map = map;
  }

  public reset(): OrderState {
    return new OrderState({
      ...this,
      state: Order.NONE,
    });
  }

  public next(): OrderState {
    switch (this.state) {
      case Order.NONE:
        return new OrderState({
          ...this,
          state: this.reverse ? Order.DESC : Order.ASC,
        });
      case Order.ASC:
        return new OrderState({
          ...this,
          state: this.reverse ? Order.NONE : Order.DESC,
        });
      case Order.DESC:
        return new OrderState({
          ...this,
          state: this.reverse ? Order.ASC : Order.NONE,
        });
    }
  }

  public toSort(): MediaSort | undefined {
    return this.map[this.state];
  }
}
