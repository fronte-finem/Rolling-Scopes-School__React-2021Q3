import React, { useEffect, useState } from 'react';
import { initOrders, OrderMap, OrderState } from './order-state';
import { OrderBy } from './order-by';
import classes from './order-by-group.module.pcss';

interface OrderByGroupProps {
  names: string[];
  onChange: (orders: OrderMap) => void;
}

export const OrderByGroup: React.FC<OrderByGroupProps> = ({
  names,
  onChange,
}) => {
  const [orders, setOrders] = useState<OrderMap>(initOrders(names));

  const handleChange = (name: string, order: OrderState) => {
    setOrders(() => ({ ...initOrders(names), [name]: order }));
  };

  useEffect(() => {
    onChange(orders);
  }, [orders]);

  return (
    <ul className={classes.group}>
      {names.map((name) => (
        <li key={name}>
          <OrderBy name={name} value={orders[name]} onChange={handleChange} />
        </li>
      ))}
    </ul>
  );
};
