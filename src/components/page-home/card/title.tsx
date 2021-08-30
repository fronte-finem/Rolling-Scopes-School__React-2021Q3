import React from 'react';
import { TitleFragment } from 'services/anilist-api/generated/search-query-types';
import { Info } from 'components/shared/info/info';
import { Maybe } from 'shared/maybe';
import classes from './title.module.pcss';

interface TitleProps {
  title?: Maybe<TitleFragment>;
  studio?: string;
}

const selectTitle = (title: TitleFragment) => {
  return title.english || title.romaji || title.native;
};

export const Title: React.FC<TitleProps> = ({ title, studio }) => {
  if (!title) return null;
  return (
    <div className={classes.header}>
      <div className={classes.title}>{selectTitle(title)}</div>
      {studio && (
        <div className={classes.studio}>
          <Info info={studio} icon="home" />
        </div>
      )}
    </div>
  );
};
