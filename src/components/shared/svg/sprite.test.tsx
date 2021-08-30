import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

const mockIconsSprites = 'assets/sprites/icons.svg';
const mockFlagsSprites = 'assets/sprites/flags.svg';

beforeEach(() => {
  jest.resetModules();
});

describe('Sprites', () => {
  const name = 'star';

  it('should be icons-sprite', async () => {
    jest.setMock(mockIconsSprites, mockIconsSprites);
    const { Icon } = await import('./sprites');
    const svg = render(<Icon name={name} />);
    const use = svg.queryByTestId('svg-use');
    expect(use).not.toBeNull();
    expect(use?.getAttribute('href')).toBe(`${mockIconsSprites}#${name}`);
  });

  it('should be flag-sprite', async () => {
    jest.setMock(mockFlagsSprites, mockFlagsSprites);
    const { Flag } = await import('./sprites');
    const svg = render(<Flag name={name} />);
    const use = svg.queryByTestId('svg-use');
    expect(use).not.toBeNull();
    expect(use?.getAttribute('href')).toBe(`${mockFlagsSprites}#${name}`);
  });
});
