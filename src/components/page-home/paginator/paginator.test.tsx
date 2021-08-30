import React from 'react';
import { Provider } from 'react-redux';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getStore } from 'store/store';
import { Paginator } from './paginator';

afterEach(cleanup);

describe('Paginator', () => {
  const mockOnPageSelect = jest.fn((page) => page);
  const mockOnPerPageSelect = jest.fn((perPage) => perPage);

  const setup = async () => {
    const { findByTestId, findAllByTestId } = render(
      <Provider store={getStore()}>
        <Paginator
          onPageSelect={mockOnPageSelect}
          onPerPageSelect={mockOnPerPageSelect}
        />
      </Provider>
    );
    const perPageSelect = (await findByTestId(
      'results-per-page'
    )) as HTMLSelectElement;
    const pageButtons = await findAllByTestId('paginator-button');
    return { pageButtons, perPageSelect };
  };

  it('should call mockOnPageSelect', async () => {
    const { pageButtons } = await setup();

    const btn = pageButtons[pageButtons.length - 1];
    fireEvent.click(btn);
    expect(mockOnPageSelect).toHaveBeenCalledTimes(1);
    expect(mockOnPageSelect).toHaveLastReturnedWith(+btn.textContent!);
  });

  it('should call mockOnPerPageSelect', async () => {
    const { perPageSelect } = await setup();

    fireEvent.change(perPageSelect, { target: { value: '50' } });
    expect(mockOnPerPageSelect).toHaveBeenCalledTimes(1);
    expect(mockOnPerPageSelect).toHaveLastReturnedWith(50);
  });
});
