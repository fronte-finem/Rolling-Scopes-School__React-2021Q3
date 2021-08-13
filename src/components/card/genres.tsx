import React from 'react';
import { Maybe } from '../../shared/maybe';
import classes from './genres.module.pcss';

export const Genres: React.FC<{ genres: Maybe<string>[] }> = ({ genres }) => {
  return (
    <ul className={classes.genres__list}>
      {genres.map((genre) => (
        <li key={genre}>
          <div className={classes.genres__item}>{genre}</div>
        </li>
      ))}
    </ul>
  );
};
