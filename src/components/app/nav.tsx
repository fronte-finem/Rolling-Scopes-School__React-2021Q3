import React from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { RouteConfig } from './routes-config';
import classes from './nav.module.pcss';
import { HistoryState } from './routing-types';

const getSeq = (len: number, init = 0) =>
  Array(len)
    .fill(init)
    .map((a, i) => a + i);

const digitsPath = `/${getSeq(10).join('/')}`;
const charsPath = `/${getSeq(26, 97)
  .map((x) => String.fromCharCode(x))
  .join('/')}`;

const getRouteNum = (config: RouteConfig[], path: string) =>
  config.findIndex((route) => route.path === path);

interface NavProps {
  config: RouteConfig[];
}

export const Nav: React.FC<NavProps> = ({ config }) => {
  const location = useLocation<HistoryState>();
  const history = useHistory<HistoryState>();
  const currentRouteNum = getRouteNum(config, location.pathname);

  const getOnClick = (path: string) => (ev: React.MouseEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
    history.push({
      pathname: path,
      state: {
        previousRouteNum: currentRouteNum,
        currentRouteNum: getRouteNum(config, path),
      },
    });
  };

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
                activeClassName={classes.navLinkActive}
                onClick={getOnClick(route.path)}>
                {route.name}
              </NavLink>
            </li>
          ))}
        <li>
          <NavLink
            to={digitsPath}
            className={classes.navLink}
            activeClassName={classes.navLinkActive}
            onClick={getOnClick(digitsPath)}>
            0 - 9
          </NavLink>
        </li>
        <li>
          <NavLink
            to={charsPath}
            className={classes.navLink}
            activeClassName={classes.navLinkActive}
            onClick={getOnClick(charsPath)}>
            a - z
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
