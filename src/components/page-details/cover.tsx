import React from 'react';
import { Maybe } from 'shared/maybe';
import { CoverFragment } from 'services/anilist-api/generated/details-query-types';
import classes from './cover.module.pcss';

interface CoverProps {
  coverImage?: Maybe<CoverFragment>;
}

export const Cover: React.FC<CoverProps> = ({ coverImage }) => {
  if (!coverImage) return null;
  const { extraLarge, large } = coverImage;
  if (!extraLarge && !large) return null;
  return (
    <div className={classes.cover} data-testid="cover">
      <img
        className={classes.coverImage}
        src={extraLarge || large!}
        alt="cover"
        data-testid="cover-image"
      />
    </div>
  );
};
