import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './button';

afterEach(cleanup);

describe('Paginator Button', () => {
  it('should return page on click', () => {
    const page = 42;
    const mockOnClick = jest.fn((x) => x);

    const { getByTestId } = render(
      <Button page={page} onClick={mockOnClick} />
    );
    const button = getByTestId('paginator-button');

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(mockOnClick).toHaveLastReturnedWith(page);

    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(2);
    expect(mockOnClick).toHaveLastReturnedWith(page);
  });
});
