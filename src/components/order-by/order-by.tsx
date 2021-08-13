import React from 'react';
import icons from 'assets/sprites/icons.svg';
import { withSprite } from 'components/svg/svg';
import { nextOrder, OrderState } from './order-state';
import classes from './order-by.module.pcss';

const Icon = withSprite(icons);

interface OrderByProps {
  name: string;
  value: OrderState;
  onChange: (name: string, state: OrderState) => void;
}

export const OrderBy: React.FC<OrderByProps> = ({ name, value, onChange }) => {
  const asc = value === OrderState.ASC ? classes.iconActive : '';
  const desc = value === OrderState.DESC ? classes.iconActive : '';

  const handleClick = () => {
    onChange(name, nextOrder(value));
  };

  return (
    <div>
      <button className={classes.button} type="button" onClick={handleClick}>
        {name}
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
