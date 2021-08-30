import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { SearchBar } from './search-bar';

afterEach(cleanup);

describe('Search Bar', () => {
  it('should render SearchBar', () => {
    const value = 'test';
    const mockOnSubmit = jest.fn((x) => x);
    const result = render(<SearchBar onSubmit={mockOnSubmit} />);

    const input = result.getByTestId('search-input') as HTMLInputElement;
    const submit = result.getByTestId('search-submit');

    expect(input).not.toBeNull();
    expect(submit).not.toBeNull();

    fireEvent.input(input, { target: { value } });
    expect(input.value).toBe(value);

    fireEvent.click(submit);
    expect(input.value).toBe('');

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveLastReturnedWith(value);
  });
});
