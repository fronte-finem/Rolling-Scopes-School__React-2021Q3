import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MediaSort } from 'services/anilist-api/generated/schema-types';
import { OrderBy } from './order-by';
import { Order, OrderState } from './order-state';
import classes from './order-by.module.pcss';

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

const noop = () => {};

afterEach(cleanup);

describe('Order By', () => {
  it('should render none order', () => {
    const order = new OrderState(initOrder);
    const { getByTestId } = render(<OrderBy order={order} onChange={noop} />);
    expect(getByTestId('icon-asc')).not.toHaveClass(classes.iconActive);
    expect(getByTestId('icon-desc')).not.toHaveClass(classes.iconActive);
  });

  it('should render asc order', () => {
    const order = new OrderState({ ...initOrder, state: Order.ASC });
    const { getByTestId } = render(<OrderBy order={order} onChange={noop} />);
    expect(getByTestId('icon-asc')).toHaveClass(classes.iconActive);
    expect(getByTestId('icon-desc')).not.toHaveClass(classes.iconActive);
  });

  it('should render desc order', () => {
    const order = new OrderState({ ...initOrder, state: Order.DESC });
    const { getByTestId } = render(<OrderBy order={order} onChange={noop} />);
    expect(getByTestId('icon-asc')).not.toHaveClass(classes.iconActive);
    expect(getByTestId('icon-desc')).toHaveClass(classes.iconActive);
  });

  it('should call handler', () => {
    const mockOnChange = jest.fn((x) => x);
    const order = new OrderState(initOrder);

    const { getByTestId } = render(
      <OrderBy order={order} onChange={mockOnChange} />
    );
    const button = getByTestId('order-button');

    fireEvent.click(button);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveLastReturnedWith(initOrder.name);

    fireEvent.click(button);
    expect(mockOnChange).toHaveBeenCalledTimes(2);
    expect(mockOnChange).toHaveLastReturnedWith(initOrder.name);
  });
});
