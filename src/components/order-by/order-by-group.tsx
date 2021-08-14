import React, { useState } from 'react';
import { MediaSort } from 'services/anilist-api/generated/types';
import { getConfig, INIT_ORDER_STATES, OrdersConfig } from './orders-config';
import { OrderBy } from './order-by';
import classes from './order-by-group.module.pcss';

interface OrderByGroupProps {
  onChange: (mediaSort?: MediaSort) => void;
}

export const OrderByGroup: React.FC<OrderByGroupProps> = ({ onChange }) => {
  const [config, setOrders] = useState<OrdersConfig>(
    getConfig(INIT_ORDER_STATES)
  );

  const handleChange = (name: string) => {
    setOrders((prev) => {
      const order = prev[name]?.next();
      if (!order) return prev;
      onChange(order.toSort());
      return { ...getConfig(INIT_ORDER_STATES), [name]: order };
    });
  };

  return (
    <ul className={classes.group}>
      {Object.values(config).map((order) => (
        <li key={order.name}>
          <OrderBy order={order} onChange={handleChange} />
        </li>
      ))}
    </ul>
  );
};
