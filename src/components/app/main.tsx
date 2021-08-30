import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { updateTitle } from 'shared/dom-utils';
import { RouteConfig } from './routes-config';
import { HistoryState } from './routing-types';
import classesSlideForward from './routing-slide-forward.module.pcss';
import classesSlideBackward from './routing-slide-backward.module.pcss';
import classesSlideToBottom from './routing-slide-to-bottom.module.pcss';
import classesSlideToTop from './routing-slide-to-top.module.pcss';
import classesErrorAnimation from './routing-error-animation.module.pcss';
import classes from './main.module.pcss';

const onTransitionBegin = (node: HTMLElement) =>
  node.parentElement?.classList.add(classes.contentAnimation);

const onTransitionEnd = (node: HTMLElement) =>
  node.parentElement?.classList.remove(classes.contentAnimation);

const getClassNames = ({ previousRouteNum, currentRouteNum }: HistoryState) => {
  if (previousRouteNum === -1 || currentRouteNum === -1)
    return classesErrorAnimation;
  if (currentRouteNum === Infinity) return classesSlideToBottom;
  if (previousRouteNum === Infinity) return classesSlideToTop;
  return currentRouteNum > previousRouteNum
    ? classesSlideForward
    : classesSlideBackward;
};

interface RoutesProps {
  config: RouteConfig[];
}

export const Main: React.FC<RoutesProps> = ({ config }) => {
  const location = useLocation<HistoryState>();
  const animationClassNames = location.state && getClassNames(location.state);

  return (
    <TransitionGroup
      className={classes.content}
      childFactory={(child) =>
        React.cloneElement(child, { classNames: animationClassNames })
      }>
      <CSSTransition
        classNames={{ ...animationClassNames }}
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
