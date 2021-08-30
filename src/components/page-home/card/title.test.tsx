import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Title } from './title';

afterEach(cleanup);

describe('Title', () => {
  it('should be empty if no title', () => {
    const { container } = render(<Title />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should prefer show english title', () => {
    const { queryByText } = render(
      <Title title={{ english: 'english', romaji: 'romaji' }} />
    );
    expect(queryByText('english')).not.toBeNull();
    expect(queryByText('romaji')).toBeNull();
  });

  it('should prefer show romaji  if no english', () => {
    const { queryByText } = render(
      <Title title={{ native: 'native', romaji: 'romaji' }} />
    );
    expect(queryByText('romaji')).not.toBeNull();
    expect(queryByText('native')).toBeNull();
  });

  it('should show native if no english and romaji', () => {
    const { queryByText } = render(<Title title={{ native: 'native' }} />);
    expect(queryByText('native')).not.toBeNull();
  });

  it('should show studio if present', () => {
    const { queryByText } = render(
      <Title title={{ native: 'native' }} studio="test" />
    );
    expect(queryByText('test')).not.toBeNull();
  });
});
