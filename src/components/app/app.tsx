import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PUBLIC_URL } from 'env';
import classes from './app.module.pcss';
import { routesConfig } from './routes-config';
import { Nav } from './nav';
import { Content } from './content';

export function App() {
  return (
    <div className={classes.app}>
      <BrowserRouter basename={PUBLIC_URL}>
        <header className={classes.header}>
          <Nav config={routesConfig} />
        </header>
        <main className={classes.main}>
          <Content config={routesConfig} />
        </main>
      </BrowserRouter>
    </div>
  );
}
