import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MediaFragment } from 'services/anilist-api/generated/search-query-types';
import { Card } from './card';

afterEach(cleanup);

describe('Cover', () => {
  const setup = (media: MediaFragment) => {
    const { queryByTestId } = render(
      <BrowserRouter>
        <Card media={media} />
      </BrowserRouter>
    );
    return { queryByTestId };
  };

  it('should be wrapped to link with id in path', () => {
    const { queryByTestId } = setup({ id: 42 });
    const card = queryByTestId('card') as HTMLAnchorElement;
    expect(card).not.toBeNull();
    expect(card instanceof HTMLAnchorElement).toBe(true);
    expect(card?.href).toBe(`${window.location}details/${42}`);
  });

  it('should be set css-vars', () => {
    const color = '#123';
    const large = 'test.jpg';
    const { queryByTestId } = setup({ id: 42, coverImage: { color, large } });
    const card = queryByTestId('card');
    expect(card?.style.getPropertyValue('--card-bg-c')).toBe(color);
    expect(card?.style.getPropertyValue('--card-bg-i')).toBe(`url(${large})`);
  });
});
