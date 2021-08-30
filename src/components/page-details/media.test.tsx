import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MediaFragment } from 'services/anilist-api/generated/details-query-types';
import { Media } from './media';

afterEach(cleanup);

describe('Media', () => {
  it('should set css-variables', () => {
    const media: MediaFragment = {
      id: 42,
      coverImage: { color: '#123' },
      bannerImage: 'banner.jpg',
    };

    const { getByTestId, rerender } = render(<Media media={{ id: 42 }} />);
    const view = getByTestId('media');
    expect(view.style.getPropertyValue('--main-c')).toBe('#fff');
    expect(view.style.getPropertyValue('--top-offset')).toBe('20px');

    rerender(<Media media={media} />);
    expect(view.style.getPropertyValue('--main-c')).toBe('#123');
    expect(view.style.getPropertyValue('--top-offset')).toBe('200px');
  });
});
