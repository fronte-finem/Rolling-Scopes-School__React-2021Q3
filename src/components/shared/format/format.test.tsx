import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MediaFormat } from 'services/anilist-api/generated/schema-types';
import { Format, format } from './format';

describe('Format', () => {
  beforeEach(cleanup);

  const data = {
    volumes: 1,
    chapters: 2,
    duration: 3,
    episodes: 4,
  };

  it(`should format values`, () => {
    expect(format('test', undefined)).toBe('');
    expect(format('test', null)).toBe('');
    expect(format('test', 0)).toBe(' • 0 test');
    expect(format('test', 1)).toBe(' • 1 test');
    expect(format('test', 2)).toBe(' • 2 tests');
    expect(format('test', 42)).toBe(' • 42 tests');
  });

  it(`should be empty if no format`, () => {
    const result = render(<Format data={{}} />);
    expect(result.container).toBeEmptyDOMElement();
  });

  it(`should be set class-name`, () => {
    const className = 'test';
    const { getByTestId } = render(
      <Format
        data={{ ...data, format: MediaFormat.Manga }}
        className={className}
      />
    );
    expect(getByTestId('format')).toHaveClass(className);
  });

  it(`should show volumes/chapters for non-video formats`, () => {
    let result = render(
      <Format data={{ ...data, format: MediaFormat.Manga }} />
    );
    expect(result.getByText('MANGA • 1 volume • 2 chapters')).not.toBeNull();
    result = render(<Format data={{ ...data, format: MediaFormat.Novel }} />);
    expect(result.getByText('NOVEL • 1 volume • 2 chapters')).not.toBeNull();
    result = render(<Format data={{ ...data, format: MediaFormat.OneShot }} />);
    expect(result.getByText('ONE SHOT • 1 volume • 2 chapters')).not.toBeNull();
  });

  it(`should show duration for movie/music formats`, () => {
    let result = render(
      <Format data={{ ...data, format: MediaFormat.Movie }} />
    );
    expect(result.getByText('MOVIE • 3 mins')).not.toBeNull();
    result = render(<Format data={{ ...data, format: MediaFormat.Music }} />);
    expect(result.getByText('MUSIC • 3 mins')).not.toBeNull();
  });

  it(`should show episode/duration for serials formats`, () => {
    let result = render(<Format data={{ ...data, format: MediaFormat.Tv }} />);
    expect(result.getByText('TV • 4 episodes • 3 mins')).not.toBeNull();
    result = render(<Format data={{ ...data, format: MediaFormat.TvShort }} />);
    expect(result.getByText('TV SHORT • 4 episodes • 3 mins')).not.toBeNull();
    result = render(<Format data={{ ...data, format: MediaFormat.Special }} />);
    expect(result.getByText('SPECIAL • 4 episodes • 3 mins')).not.toBeNull();
    result = render(<Format data={{ ...data, format: MediaFormat.Ova }} />);
    expect(result.getByText('OVA • 4 episodes • 3 mins')).not.toBeNull();
    result = render(<Format data={{ ...data, format: MediaFormat.Ona }} />);
    expect(result.getByText('ONA • 4 episodes • 3 mins')).not.toBeNull();
  });

  it(`should show short formats`, () => {
    let result = render(
      <Format data={{ ...data, format: MediaFormat.Manga }} />
    );
    expect(result.getByText('MANGA • 1 volume • 2 chapters')).not.toBeNull();
    result = render(
      <Format data={{ ...data, format: MediaFormat.Manga }} short />
    );
    expect(result.getByText('MANGA • 2 chapters')).not.toBeNull();
    result = render(<Format data={{ ...data, format: MediaFormat.Tv }} />);
    expect(result.getByText('TV • 4 episodes • 3 mins')).not.toBeNull();
    result = render(
      <Format data={{ ...data, format: MediaFormat.Tv }} short />
    );
    expect(result.getByText('TV • 4 episodes')).not.toBeNull();
  });
});
