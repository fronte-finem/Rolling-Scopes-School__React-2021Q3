import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PUBLIC_URL } from 'env';
import classes from './app.module.pcss';
import { routesConfig } from './routes-config';
import { Nav } from './nav';
import { Main } from './main';

export function App() {
  return (
    <div className={classes.app} data-testid="app">
      <BrowserRouter basename={PUBLIC_URL}>
        <header className={classes.header} data-testid="header">
          <Nav config={routesConfig} />
        </header>
        <main className={classes.main} data-testid="main">
          <Main config={routesConfig} />
        </main>
      </BrowserRouter>
    </div>
  );
}
