import React, { useRef } from 'react';
import classes from './page-404.module.pcss';

export function Page404() {
  const { current } = useRef(window.location.toString());
  return (
    <div className={classes.page404}>
      <div>
        <h2 className={classes.title}>404</h2>
        <p className={classes.text}>Page &ldquo;{current}&rdquo; not exist;</p>
      </div>
    </div>
  );
}
