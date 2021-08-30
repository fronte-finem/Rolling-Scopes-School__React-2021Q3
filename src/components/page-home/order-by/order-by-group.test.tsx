import React from 'react';
import { Provider } from 'react-redux';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getStore } from 'store/store';
import { OrderByGroup } from './order-by-group';
import { INIT_ORDER_STATES } from './orders-config';
import { Order } from './order-state';

afterEach(cleanup);

describe('Order By', () => {
  it('should call handler', () => {
    const mockOnChange = jest.fn((x) => x);

    const Component = () => (
      <Provider store={getStore()}>
        <OrderByGroup onChange={mockOnChange} />
      </Provider>
    );

    const { getAllByTestId } = render(<Component />);

    const buttons = getAllByTestId('order-button');
    expect(buttons).toHaveLength(INIT_ORDER_STATES.length);

    fireEvent.click(buttons[0]);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveLastReturnedWith(
      INIT_ORDER_STATES[0].map[Order.DESC]
    );
  });
});
