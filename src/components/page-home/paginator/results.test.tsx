import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PageInfoFragment } from 'services/anilist-api/generated/search-query-types';
import { Results } from './results';

afterEach(cleanup);

describe('Results', () => {
  const initPageInfo: PageInfoFragment = {
    perPage: 5,
    total: 42,
  };
  const mockOnSelect = jest.fn((perPage) => perPage);

  const setup = (pageInfo: PageInfoFragment = {}) => {
    const { getByTestId } = render(
      <Results pageInfo={pageInfo} onSelect={mockOnSelect} />
    );
    const select = getByTestId('results-per-page') as HTMLSelectElement;
    const totalView = getByTestId('results-total');
    return { select, totalView };
  };

  it('should work with empty PageInfo', () => {
    const { select, totalView } = setup();
    expect(totalView.textContent).toMatch(/^Results \(0\)/);
    expect(select.value).toBe('10');
  });

  it('should call onSelect', () => {
    const { select } = setup(initPageInfo);
    fireEvent.change(select, { target: { value: '50' } });
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveLastReturnedWith(50);
  });
});
