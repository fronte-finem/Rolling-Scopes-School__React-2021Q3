export enum OrderState {
  NONE = 'none',
  ASC = 'asc',
  DESC = 'desc',
}

export type OrderMap = { [keys: string]: OrderState };

export function nextOrder(order: OrderState): OrderState {
  switch (order) {
    case OrderState.NONE:
      return OrderState.DESC;
    case OrderState.DESC:
      return OrderState.ASC;
    case OrderState.ASC:
      return OrderState.NONE;
  }
}

export const initOrders = (keys: string[]): OrderMap => {
  return keys.reduce((acc, key) => {
    acc[key] = OrderState.NONE;
    return acc;
  }, {} as OrderMap);
};
