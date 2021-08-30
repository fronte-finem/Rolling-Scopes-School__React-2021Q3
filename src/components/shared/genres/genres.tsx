import React from 'react';
import { isNone, isValue, Maybe } from 'shared/maybe';
import classes from './genres.module.pcss';

interface GenresProps {
  genres?: Maybe<Maybe<string>[]>;
}

export const Genres: React.FC<GenresProps> = ({ genres }) => {
  if (isNone(genres)) return null;
  return (
    <ul className={classes.genresList}>
      {genres
        .filter((x): x is string => isValue(x) && x !== '')
        .map((genre) => (
          <li key={genre} data-testid="genre-item">
            <div className={classes.genresItem}>{genre}</div>
          </li>
        ))}
    </ul>
  );
};
