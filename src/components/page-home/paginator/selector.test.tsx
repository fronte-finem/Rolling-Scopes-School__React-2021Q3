import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PageInfoFragment } from 'services/anilist-api/generated/search-query-types';
import { Selector } from './selector';

afterEach(cleanup);

describe('Selector', () => {
  const initPageInfo: PageInfoFragment = {
    currentPage: 33,
    lastPage: 42,
  };
  const mockOnSelect = jest.fn((page) => page);

  const setup = (pageInfo: PageInfoFragment = {}) => {
    const { getByTestId, queryAllByTestId } = render(
      <Selector pageInfo={pageInfo} onSelect={mockOnSelect} />
    );
    const input = getByTestId('page-input') as HTMLInputElement;
    const submit = getByTestId('page-submit');
    const buttons = queryAllByTestId('paginator-button');
    return { input, submit, buttons };
  };

  it('should work with empty PageInfo', () => {
    const { input, buttons } = setup();
    expect(buttons).toHaveLength(0);
    expect(input).not.toBeNull();
    expect(input.value).toBe('1');
  });

  it('should be first input if current page === 1', () => {
    const { input, buttons } = setup({ ...initPageInfo, currentPage: 1 });
    expect(input.value).toBe('1');
    expect(buttons[0].textContent).toBe('2');
    expect(buttons[buttons.length - 1].textContent).toBe(
      `${initPageInfo.lastPage!}`
    );
  });

  it('should be last input if current page === last', () => {
    const { input, buttons } = setup({
      ...initPageInfo,
      currentPage: initPageInfo.lastPage,
    });
    expect(input.value).toBe(`${initPageInfo.lastPage!}`);
    expect(buttons[0].textContent).toBe('1');
    expect(buttons[buttons.length - 1].textContent).toBe(
      `${initPageInfo.lastPage! - 1}`
    );
  });

  it('should paginate with buttons', () => {
    const { buttons } = setup(initPageInfo);
    fireEvent.click(buttons[buttons.length - 1]);
    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveLastReturnedWith(initPageInfo.lastPage);
  });

  it('should paginate with input', () => {
    const { input, submit } = setup(initPageInfo);
    fireEvent.input(input, { target: { value: '24' } });
    fireEvent.click(submit);
    expect(mockOnSelect).toHaveBeenCalledTimes(2);
    expect(mockOnSelect).toHaveLastReturnedWith(24);
  });
});
