import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Cover } from './cover';

afterEach(cleanup);

describe('Cover', () => {
  it('should have no cover-image if no url', () => {
    const { queryByTestId } = render(<Cover media={{ id: 1 }} />);
    expect(queryByTestId('cover-image')).toBeNull();
  });

  it('should show cover-image', () => {
    const { queryByTestId } = render(
      <Cover media={{ id: 1, coverImage: { large: 'test.jpg' } }} />
    );
    expect((queryByTestId('cover-image') as HTMLImageElement).src).toBe(
      `${window.location}test.jpg`
    );
  });

  it('should show age restrict icon if is-adult set', () => {
    const { queryByTestId } = render(
      <Cover media={{ id: 1, isAdult: true }} />
    );
    expect(queryByTestId('svg-use')?.getAttribute('href')).toMatch(/#18-plus$/);
  });

  it('should show age restrict icon if is-adult set', () => {
    const { queryByTestId } = render(
      <Cover media={{ id: 1, isAdult: true }} />
    );
    expect(queryByTestId('svg-use')?.getAttribute('href')).toMatch(/#18-plus$/);
  });

  it('should show flag-icon if country-Of-Origin set to known value', () => {
    const { queryByTestId } = render(
      <Cover media={{ id: 1, countryOfOrigin: 'JP' }} />
    );
    expect(queryByTestId('svg-use')?.getAttribute('href')).toMatch(/#japan$/);
  });

  it('should show (next year + 1) if release date not set', () => {
    const { queryByTestId } = render(<Cover media={{ id: 1 }} />);
    expect(queryByTestId('cover-year')?.textContent).toBe(
      `> ${new Date().getFullYear() + 2}`
    );
  });
});
