import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Stats } from './stats';

describe('Stats', () => {
  it('should be empty if no stats', () => {
    const status = render(<Stats />);
    expect(status.container).toBeEmptyDOMElement();
  });

  it('should show score', () => {
    const score = 42;
    const status = render(<Stats score={score} />);
    expect(status.getByText((score / 10).toLocaleString())).not.toBeNull();
  });

  it('should show popularity', () => {
    const popularity = 1337;
    const status = render(<Stats popularity={popularity} />);
    expect(status.getByText(popularity.toLocaleString())).not.toBeNull();
  });

  it('should show score and popularity', () => {
    const score = 42;
    const popularity = 1337;
    const status = render(<Stats score={score} popularity={popularity} />);
    expect(status.getByText((score / 10).toLocaleString())).not.toBeNull();
    expect(status.getByText(popularity.toLocaleString())).not.toBeNull();
  });
});
