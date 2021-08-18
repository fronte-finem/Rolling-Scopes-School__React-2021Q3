import React from 'react';
import { TitleFragment } from 'services/anilist-api/generated/search-query-types';
import classes from './title.module.pcss';
import { Info } from '../info/info';
import { MediaProps } from './types';

const formatTip = (title: TitleFragment) =>
  `${title.romaji || ''}\n${title.english || ''}\n${title.native || ''}`;

export const Title: React.FC<MediaProps> = ({ media }) => {
  if (!media.title) return <></>;
  return (
    <div className={classes.header} title={formatTip(media.title)}>
      <div className={classes.title}>{media.title.romaji}</div>
      <div className={classes.studio}>
        {media.studios?.nodes?.[0] && (
          <Info info={media.studios.nodes[0].name} icon="home" />
        )}
      </div>
    </div>
  );
};
