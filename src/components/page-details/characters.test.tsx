import React from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CharacterFragment } from 'services/anilist-api/generated/details-query-types';
import { Characters, formatGender } from './characters';

afterEach(cleanup);

describe('Format Gender', () => {
  it('should code gender', () => {
    expect(formatGender('male')).toBe('♂️');
    expect(formatGender('female')).toBe('♀️');
    expect(formatGender('unknown')).toBe('⚧️');
  });
});

describe('Characters', () => {
  it('should be empty if no characters', () => {
    const { container, rerender } = render(<Characters />);
    expect(container).toBeEmptyDOMElement();
    rerender(<Characters characters={{}} />);
    expect(container).toBeEmptyDOMElement();
    rerender(<Characters characters={{ nodes: null }} />);
    expect(container).toBeEmptyDOMElement();
    rerender(<Characters characters={{ nodes: [] }} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should show name', () => {
    const char: CharacterFragment = { id: 42, name: { full: 'Char 42' } };
    const { getAllByTestId } = render(
      <Characters characters={{ nodes: [char] }} />
    );
    expect(getAllByTestId('character-name')).toHaveLength(1);
  });

  it('should show images', () => {
    const char: CharacterFragment = { id: 42, image: { medium: 'char.jpg' } };
    const { getAllByTestId } = render(
      <Characters characters={{ nodes: [char] }} />
    );
    expect(getAllByTestId('character-image')).toHaveLength(1);
  });

  it('should show gender', () => {
    const char: CharacterFragment = { id: 42, gender: 'female' };
    const { getAllByTestId } = render(
      <Characters characters={{ nodes: [char] }} />
    );
    expect(getAllByTestId('character-gender')).toHaveLength(1);
  });

  it('should show age', () => {
    const char: CharacterFragment = { id: 42, age: '42' };
    const { getAllByTestId } = render(
      <Characters characters={{ nodes: [char] }} />
    );
    expect(getAllByTestId('character-age')).toHaveLength(1);
  });
});
