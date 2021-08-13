import React, { CSSProperties } from 'react';
import { MediaFragment } from 'services/anilist-api/generated/types';
import classes from './card.module.pcss';
import { Genres } from './genres';
import { Format } from './format';
import { Cover } from './cover';
import { Title } from './title';
import { Info } from './info';

interface MediaProps {
  media: MediaFragment;
}

export const Card: React.FC<MediaProps> = ({ media }) => {
  return (
    <div
      className={classes.card}
      style={
        {
          '--card-bg-c': media.coverImage?.color || '#fff',
          '--card-bg-i':
            (media.coverImage?.large && `url(${media.coverImage?.large})`) ||
            'unset',
        } as CSSProperties
      }>
      <Cover media={media} />
      <div className={classes.container}>
        <Title media={media} />
        <Format media={media} />
        {media.genres && (
          <div className={classes.genres}>
            <Genres genres={media.genres} />
          </div>
        )}
        <div className={classes.stats}>
          {media.averageScore && (
            <Info info={media.averageScore / 10} icon="star" />
          )}
          {media.popularity && <Info info={media.popularity} icon="people" />}
        </div>
      </div>
    </div>
  );
};
