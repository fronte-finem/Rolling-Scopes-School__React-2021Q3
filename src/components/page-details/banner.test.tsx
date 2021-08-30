import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Banner } from './banner';

afterEach(cleanup);

describe('Banner', () => {
  it('should be empty if no url', () => {
    const { queryByTestId } = render(<Banner />);
    expect(queryByTestId('banner')).toBeNull();
  });

  it('should set image to url', () => {
    const url = 'test.jpg';
    const { queryByTestId } = render(<Banner url={url} />);
    const img = queryByTestId('banner-image');
    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toBe(url);
  });
});
