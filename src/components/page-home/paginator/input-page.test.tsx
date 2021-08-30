import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { InputPage } from './input-page';

afterEach(cleanup);

describe('Input Page', () => {
  const last = 42;
  const mockOnChange = jest.fn((x) => x);

  const setup = () => {
    const { getByTestId } = render(
      <InputPage page={1} last={last} onChange={mockOnChange} />
    );
    const input = getByTestId('page-input') as HTMLInputElement;
    const submit = getByTestId('page-submit');
    return { input, submit };
  };

  it('should render InputPage', () => {
    const { input, submit } = setup();
    fireEvent.input(input, { target: { value: '5' } });
    expect(input.value).toBe('5');

    fireEvent.click(submit);
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveLastReturnedWith(5);
  });

  it('should be constrained by last and 1 pages', () => {
    const { input } = setup();
    fireEvent.input(input, { target: { value: '55' } });
    expect(input.value).toBe(last.toString());

    fireEvent.input(input, { target: { value: '0' } });
    expect(input.value).toBe('1');
  });
});
