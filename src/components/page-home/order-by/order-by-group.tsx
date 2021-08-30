import React, { useState } from 'react';
import { MediaSort } from 'services/anilist-api/generated/schema-types';
import { useAppSelector } from 'store/hooks';
import { INIT_ORDER_STATES, OrdersConfig } from './orders-config';
import { OrderBy } from './order-by';
import classes from './order-by-group.module.pcss';
import { getConfig } from './get-config';

interface OrderByGroupProps {
  onChange: (mediaSort?: MediaSort) => void;
}

export const OrderByGroup: React.FC<OrderByGroupProps> = ({ onChange }) => {
  const mediaSort = useAppSelector((state) => state.searchVars.sort);

  const [config, setOrders] = useState<OrdersConfig>(
    getConfig(INIT_ORDER_STATES, mediaSort)
  );

  const handleChange = (name: string) => {
    setOrders((prev) => {
      const order = prev[name].next();
      onChange(order.toSort());
      return { ...getConfig(INIT_ORDER_STATES), [name]: order };
    });
  };

  return (
    <ul className={classes.group}>
      {Object.values(config).map((order) => (
        <li key={order.name} data-testid="order-item">
          <OrderBy order={order} onChange={handleChange} />
        </li>
      ))}
    </ul>
  );
};
