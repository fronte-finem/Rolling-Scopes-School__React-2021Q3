import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { isValue } from 'shared/maybe';
import { Genres } from './genres';

describe('Genres', () => {
  it(`should be empty if no props`, () => {
    const result = render(<Genres />);
    expect(result.container).toBeEmptyDOMElement();
  });

  it(`should show genres items`, () => {
    const genres = ['test', '42', 'xxx'];
    const result = render(<Genres genres={genres} />);
    expect(result.getAllByTestId('genre-item')).toHaveLength(genres.length);
  });

  it(`should show only non-empty genres items`, () => {
    const genres = ['test', null, '42', undefined, 'xxx', ''];
    const result = render(<Genres genres={genres} />);
    expect(result.getAllByTestId('genre-item')).toHaveLength(
      genres.filter((x) => isValue(x) && x).length
    );
  });
});
