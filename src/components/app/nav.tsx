import React from 'react';
import { NavLink } from 'react-router-dom';
import { RouteConfig } from './routes-config';
import classes from './nav.module.pcss';

const digits = Array(10)
  .fill(0)
  .map((a, i) => a + i);

const chars = Array(26)
  .fill(97)
  .map((a, i) => String.fromCharCode(a + i));

interface NavProps {
  config: RouteConfig[];
}

export const Nav: React.FC<NavProps> = ({ config }) => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        {config
          .filter((route) => route.nav)
          .map((route) => (
            <li key={route.name}>
              <NavLink
                to={route.path}
                exact
                className={classes.navLink}
                activeClassName={classes.navLinkActive}>
                {route.name}
              </NavLink>
            </li>
          ))}
        <li>
          <NavLink
            to={`/${digits.join('/')}`}
            className={classes.navLink}
            activeClassName={classes.navLinkActive}>
            0 - 9
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/${chars.join('/')}`}
            className={classes.navLink}
            activeClassName={classes.navLinkActive}>
            a - z
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
