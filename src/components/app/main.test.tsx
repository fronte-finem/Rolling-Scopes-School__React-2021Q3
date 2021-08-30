import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Nav } from './nav';
import { Main } from './main';
import { testConfig } from './test-routes-config';

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: jest.fn(({ children }) => children),
    TransitionGroup: jest.fn(({ children }) => children),
  };
});

export const RouterWrapper = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Nav config={testConfig} />
      <Main config={testConfig} />
    </MemoryRouter>
  );
};

describe('Main', () => {
  it('should switch routes', () => {
    const { queryAllByTestId, queryByTestId } = render(<RouterWrapper />);
    const links = queryAllByTestId('nav-link');

    expect(queryByTestId('nav-page')?.textContent).toBe(testConfig[0].name);

    fireEvent.click(links[1]);
    expect(queryByTestId('nav-page')?.textContent).toBe(testConfig[1].name);
  });
});
