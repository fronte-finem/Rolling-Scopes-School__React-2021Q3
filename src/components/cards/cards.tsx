import React from 'react';
import { MediaFragment } from 'services/anilist-api/generated/types';
import { Card } from 'components/card/card';
import { Maybe } from 'shared/maybe';
import classes from './cards.module.pcss';

interface CardsProps {
  mediaFragments: Maybe<MediaFragment>[];
}

export const Cards: React.FC<CardsProps> = ({ mediaFragments }) => {
  return (
    <ul className={classes.cards}>
      {mediaFragments.map(
        (fragment) =>
          fragment && (
            <li key={fragment?.id}>
              <Card media={fragment} />
            </li>
          )
      )}
    </ul>
  );
};
