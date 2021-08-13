import React from 'react';
import {
  MediaFragment,
  TitleFragment,
} from 'services/anilist-api/generated/types';
import classes from './title.module.pcss';
import { Info } from './info';

const formatTip = (title: TitleFragment) =>
  `${title.romaji || ''}\n${title.english || ''}\n${title.native || ''}`;

interface MediaProps {
  media: MediaFragment;
}

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
