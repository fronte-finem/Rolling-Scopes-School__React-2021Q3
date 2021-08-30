import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Cover } from './cover';

afterEach(cleanup);

describe('Cover', () => {
  it('should be empty if no urls', () => {
    const { queryByTestId, rerender } = render(<Cover />);
    expect(queryByTestId('cover')).toBeNull();

    rerender(<Cover coverImage={{}} />);
    expect(queryByTestId('cover')).toBeNull();
  });

  it('should set extra-large or large image', () => {
    const extraLarge = 'extra-large.jpg';
    const large = 'large.jpg';

    const { queryByTestId, rerender } = render(
      <Cover coverImage={{ extraLarge, large }} />
    );
    expect(queryByTestId('cover-image')?.getAttribute('src')).toBe(extraLarge);

    rerender(<Cover coverImage={{ large }} />);
    expect(queryByTestId('cover-image')?.getAttribute('src')).toBe(large);
  });
});
