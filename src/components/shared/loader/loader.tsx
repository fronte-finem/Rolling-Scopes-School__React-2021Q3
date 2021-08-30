import React, { CSSProperties } from 'react';
import classes from './loader.module.pcss';

export const CELLS_NUM = 9;

const cells = Array(CELLS_NUM)
  .fill(1)
  .map((item, index) => item + index);

interface LoaderProps {
  size?: number;
}

export const Loader: React.FC<LoaderProps> = ({ size = 100 }) => {
  return (
    <div
      className={classes.loader}
      style={{ '--size': `${size}px` } as CSSProperties}
      data-testid="loader">
      {cells.map((item) => (
        <div className={classes.cell} key={item} />
      ))}
    </div>
  );
};
