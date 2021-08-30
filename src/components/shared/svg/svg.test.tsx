import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Svg, withSprite } from './svg';

describe('Svg', () => {
  const src = 'assets/sprites/test.svg';
  const prefix = 'icon-';
  const name = 'star';

  it('should have path with prefix', () => {
    const svg = render(<Svg src={src} name={name} prefix={prefix} />);
    const use = svg.queryByTestId('svg-use');
    expect(use).not.toBeNull();
    expect(use?.getAttribute('href')).toBe(`${src}#${prefix}${name}`);
  });

  it('should have path without prefix', () => {
    const svg = render(<Svg src={src} name={name} />);
    const use = svg.queryByTestId('svg-use');
    expect(use).not.toBeNull();
    expect(use?.getAttribute('href')).toBe(`${src}#${name}`);
  });

  it('should decorate with-svg-sprite', () => {
    const Sprite = withSprite(src, prefix);
    const svg = render(<Sprite name={name} />);
    const use = svg.queryByTestId('svg-use');
    expect(use).not.toBeNull();
    expect(use?.getAttribute('href')).toBe(`${src}#${prefix}${name}`);
  });
});
