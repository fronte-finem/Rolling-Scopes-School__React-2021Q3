import React from 'react';
import icons from 'assets/sprites/icons.svg';
import { withSprite } from 'components/svg/svg';
import { Order, OrderState } from './order-state';
import classes from './order-by.module.pcss';

const Icon = withSprite(icons);

interface OrderByProps {
  order: OrderState;
  onChange: (name: string) => void;
}

export const OrderBy: React.FC<OrderByProps> = ({ order, onChange }) => {
  const asc = order.state === Order.ASC ? classes.iconActive : '';
  const desc = order.state === Order.DESC ? classes.iconActive : '';

  const handleClick = () => {
    onChange(order.name);
  };

  return (
    <div>
      <button className={classes.button} type="button" onClick={handleClick}>
        {order.name}
        <div className={classes.order}>
          <div className={`${classes.icon} ${asc}`}>
            <Icon name="caret-up" />
          </div>
          <div className={`${classes.icon} ${desc}`}>
            <Icon name="caret-down" />
          </div>
        </div>
      </button>
    </div>
  );
};
