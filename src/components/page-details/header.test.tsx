import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MediaFragment } from 'services/anilist-api/generated/details-query-types';
// eslint-disable-next-line @typescript-eslint/no-redeclare
import { MediaSource } from 'services/anilist-api/generated/schema-types';
import { Header, formatSource } from './header';

afterEach(cleanup);

describe('Header', () => {
  it('should show tiles', () => {
    const title = { romaji: 'romaji', english: 'english', native: 'native' };
    const media: MediaFragment = { id: 42, title };
    const { queryAllByText, rerender } = render(<Header media={media} />);
    expect(queryAllByText(title.romaji)).toHaveLength(1);
    expect(queryAllByText(title.english)).toHaveLength(1);
    expect(queryAllByText(title.native)).toHaveLength(1);

    rerender(
      <Header
        media={{ ...media, title: { ...title, english: title.romaji } }}
      />
    );
    expect(queryAllByText(title.romaji)).toHaveLength(1);
    expect(queryAllByText(title.native)).toHaveLength(1);
  });

  it('should show flag and studio', () => {
    const media: MediaFragment = {
      id: 42,
      countryOfOrigin: 'JP',
      studios: { nodes: [{ name: 'Test-Studio' }] },
    };
    const { queryAllByTestId, queryByText } = render(<Header media={media} />);
    expect(queryAllByTestId('svg-use')).toHaveLength(2);
    expect(queryByText('Test-Studio')).not.toBeNull();
  });

  it('should format source', () => {
    const source = MediaSource.LightNovel;
    const media: MediaFragment = { id: 42, source };
    const { queryByText } = render(<Header media={media} />);
    expect(queryByText(`source: ${formatSource(source)}`)).not.toBeNull();
  });

  it('should show release years', () => {
    const start = 2020;
    const end = 2021;
    const media: MediaFragment = {
      id: 42,
      seasonYear: start,
      startDate: { year: start },
      endDate: { year: end },
    };
    const { queryByText } = render(<Header media={media} />);
    expect(queryByText(`${start} - ${end}`)).not.toBeNull();
  });

  it('should show age restrict if adult', () => {
    const media: MediaFragment = {
      id: 42,
      isAdult: true,
    };
    const { queryByText } = render(<Header media={media} />);
    expect(queryByText('18+')).not.toBeNull();
  });
});
