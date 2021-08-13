import React, { CSSProperties } from 'react';
import classes from './loader.module.pcss';

const cells = Array(9)
  .fill(1)
  .map((item, index) => item + index);

interface LoaderProps {
  size?: number;
}

export const Loader: React.FC<LoaderProps> = ({ size = 100 }) => {
  return (
    <div
      className={classes.loader}
      style={{ '--size': `${size}px` } as CSSProperties}>
      {cells.map((item) => (
        <div className={classes.cell} key={item} />
      ))}
    </div>
  );
};
