import React from 'react';
import { isValue, Maybe } from 'shared/maybe';
import { CharacterFragment } from 'services/anilist-api/generated/details-query-types';
import classes from './characters.module.pcss';

type CharactersArray = Maybe<CharacterFragment>[];

interface CharactersNodes {
  nodes?: Maybe<CharactersArray>;
}

interface CharactersProps {
  characters: Maybe<CharactersNodes>;
}

const formatGender = (gender: string) => {
  switch (gender.toLowerCase()) {
    case 'male':
      return '♂️';
    case 'female':
      return '♀️';
    default:
      return '⚧️';
  }
};

export const Characters: React.FC<CharactersProps> = ({ characters }) => {
  if (!characters?.nodes) return null;
  return (
    <ul className={classes.characters}>
      {characters.nodes.filter(isValue).map((char) => (
        <li key={char.id}>
          <div className={classes.card}>
            {char.image?.medium && (
              <div className={classes.cover}>
                <img
                  className={classes.coverImage}
                  src={char.image?.large || char.image.medium}
                  alt={char.name?.full || 'character'}
                />
              </div>
            )}
            <div className={classes.content}>
              <div className={classes.info}>
                {char.name?.full && <div>{char.name.full}</div>}
                <div className={classes.infoMore}>
                  {char.gender && <div>{formatGender(char.gender)}</div>}
                  {char.age && <div>{char.age} y.o.</div>}
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
