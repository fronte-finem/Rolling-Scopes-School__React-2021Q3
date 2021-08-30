import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Trailer } from './trailer';

afterEach(cleanup);

describe('Trailer', () => {
  it('should be empty if no youtube id', () => {
    const { container, rerender } = render(<Trailer />);
    expect(container).toBeEmptyDOMElement();

    rerender(<Trailer trailer={{ site: 'vimeo', id: '12345' }} />);
    expect(container).toBeEmptyDOMElement();

    rerender(<Trailer trailer={{ site: 'youtube', id: null }} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should be set youtube embed url', () => {
    const id = '12345';
    const { queryByTestId } = render(
      <Trailer trailer={{ site: 'youtube', id }} />
    );

    const video = queryByTestId('trailer-video');
    expect(video?.getAttribute('src')).toBe(
      `https://www.youtube.com/embed/${id}`
    );
  });
});
