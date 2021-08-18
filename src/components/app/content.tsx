import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { updateTitle } from 'shared/update-title';
import { RouteConfig } from './routes-config';
import classes from './content.module.pcss';

const onTransitionBegin = (node: HTMLElement) =>
  node.parentElement?.classList.add(classes.contentAnimation);

const onTransitionEnd = (node: HTMLElement) =>
  node.parentElement?.classList.remove(classes.contentAnimation);

interface RoutesProps {
  config: RouteConfig[];
}

export const Content: React.FC<RoutesProps> = ({ config }) => {
  const location = useLocation();
  return (
    <TransitionGroup className={classes.content}>
      <CSSTransition
        classNames={{ ...classes }}
        key={location.key}
        timeout={500}
        onEnter={onTransitionBegin}
        onEntered={onTransitionEnd}>
        <Switch location={location}>
          {config.map(({ name, path, Component }) => (
            <Route key={name} path={path} exact>
              {() => {
                updateTitle(name);
                return (
                  <div className={classes.animatedPage}>
                    <Component />
                  </div>
                );
              }}
            </Route>
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};
