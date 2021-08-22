import React from 'react';
import classes from './page-about.module.pcss';

const TASKS = {
  'React API':
    'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-api.md',
  'React Routing':
    'https://github.com/rolling-scopes-school/tasks/blob/master/tasks/react/react-routing.md',
};

const SOLUTION = {
  'Builder: Vitejs': 'https://vitejs.dev/',
  'Stack: React / Typescript / PostCSS': 'https://reactjs.org/',
  'API: AniList APIv2': 'https://anilist.gitbook.io/anilist-apiv2-docs/',
  'graphql-request': 'https://github.com/prisma-labs/graphql-request',
  'react-router-dom': 'https://reactrouter.com/web/guides/quick-start',
  'react-transition-group':
    'http://reactcommunity.org/react-transition-group/css-transition',
};

export function About() {
  return (
    <div className={classes.pageAbout}>
      <div>
        <h2 className={classes.title}>About</h2>
        <div className={classes.task}>
          <section>
            <h3>Tasks:</h3>
            <ul>
              {Object.entries(TASKS).map(([name, url]) => (
                <li key={name}>
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Solution:</h3>
            <ul>
              {Object.entries(SOLUTION).map(([name, url]) => (
                <li key={name}>
                  <a href={url}>{name}</a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
