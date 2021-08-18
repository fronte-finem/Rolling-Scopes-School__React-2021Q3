import React from 'react';
import { isNone, Maybe } from 'shared/maybe';
import classes from './genres.module.pcss';

interface GenresProps {
  genres?: Maybe<Maybe<string>[]>;
}

export const Genres: React.FC<GenresProps> = ({ genres }) => {
  if (isNone(genres)) return <></>;
  return (
    <ul className={classes.genresList}>
      {genres.map((genre) => (
        <li key={genre}>
          <div className={classes.genresItem}>{genre}</div>
        </li>
      ))}
    </ul>
  );
};
