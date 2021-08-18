import React from 'react';
import { Maybe } from 'shared/maybe';
import { CoverFragment } from 'services/anilist-api/generated/details-query-types';
import classes from './cover.module.pcss';

interface CoverProps {
  coverImage: Maybe<CoverFragment>;
}

export const Cover: React.FC<CoverProps> = ({ coverImage }) => {
  if (!coverImage?.large) return <></>;
  return (
    <div className={classes.cover}>
      <img
        className={classes.coverImage}
        src={coverImage.extraLarge || coverImage.large}
        alt="cover"
      />
    </div>
  );
};
