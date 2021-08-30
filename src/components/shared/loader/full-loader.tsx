import React from 'react';
import classes from './full-loader.module.pcss';

export const FullLoader: React.FC = () => {
  return <div className={classes.fullLoader} data-testid="loader" />;
};
