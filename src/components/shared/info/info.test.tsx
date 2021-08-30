import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Info } from './info';

describe('Info', () => {
  it('should show string value', () => {
    const info = render(<Info icon="test" info="test" />);
    expect(info.getByText('test')).not.toBeNull();
  });

  it('should show number value', () => {
    const info = render(<Info icon="test" info={42} />);
    expect(info.getByText((42).toLocaleString())).not.toBeNull();
  });

  it('should contain svg-icon', () => {
    const info = render(<Info icon="test" info={42} />);
    const use = info.queryByTestId('svg-use');
    expect(use).not.toBeNull();
    expect(use?.getAttribute('href')).toMatch(/#test$/);
  });
});
