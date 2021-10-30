import React from 'react';
import { Route, MemoryRouter, Switch } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Nav } from './nav';
import classes from './nav.module.pcss';
import { testConfig } from './test-routes-config';

const NavWrapper = () => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Nav config={testConfig} />
      <Switch>
        {testConfig.map((conf) => (
          <Route exact key={conf.name} path={conf.path}>
            <conf.Component />
          </Route>
        ))}
      </Switch>
    </MemoryRouter>
  );
};

describe('Nav', () => {
  it('should add links', () => {
    const { queryAllByTestId } = render(<NavWrapper />);
    const links = queryAllByTestId('nav-link');
    expect(links).toHaveLength(
      2 + testConfig.filter((conf) => conf.nav).length
    );
  });

  it('should switch routes and add active class', () => {
    const { queryAllByTestId, queryByTestId } = render(<NavWrapper />);
    const links = queryAllByTestId('nav-link');

    expect(queryByTestId('nav-page')?.textContent).toBe(testConfig[0].name);
    expect(links[0]).toHaveClass(classes.navLinkActive);
    expect(links[1]).not.toHaveClass(classes.navLinkActive);

    fireEvent.click(links[1]);
    expect(queryByTestId('nav-page')?.textContent).toBe(testConfig[1].name);
    expect(links[0]).not.toHaveClass(classes.navLinkActive);
    expect(links[1]).toHaveClass(classes.navLinkActive);
  });
});
