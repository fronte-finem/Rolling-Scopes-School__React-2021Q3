import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CELLS_NUM, Loader } from './loader';

afterEach(cleanup);

const size = 42;

describe('Loader', () => {
  it('should render loader', () => {
    const loader = render(<Loader />);
    expect(loader.getByTestId('loader')).not.toBeNull();
  });

  it(`should contain ${CELLS_NUM} cells`, () => {
    const loader = render(<Loader />);
    expect(loader.getByTestId('loader').children).toHaveLength(CELLS_NUM);
  });

  it('css-var --size should be 100px default', () => {
    const loader = render(<Loader />);
    expect(loader.getByTestId('loader').style.getPropertyValue('--size')).toBe(
      `100px`
    );
  });

  it(`css-var --size should be ${size}px`, () => {
    const loader = render(<Loader size={size} />);
    expect(loader.getByTestId('loader').style.getPropertyValue('--size')).toBe(
      `${size}px`
    );
  });
});
