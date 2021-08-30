import React from 'react';
import { RouteConfig } from './routes-config';

export const testRoute = (name?: string) => ({
  path: `/${name ? name.toLowerCase() : ''}`,
  nav: true,
  name: name || 'Home',
  Component: () => <div data-testid="nav-page">{name || 'Home'}</div>,
});

export const testConfig: RouteConfig[] = [
  testRoute(),
  testRoute('About'),
  testRoute('Test'),
];
