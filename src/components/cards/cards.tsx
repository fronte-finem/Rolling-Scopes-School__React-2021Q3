import React from 'react';
import { Card } from 'components/card/card';
import { Maybe } from 'shared/maybe';
import { MediaFragment } from 'services/anilist-api/generated/search-query-types';
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
