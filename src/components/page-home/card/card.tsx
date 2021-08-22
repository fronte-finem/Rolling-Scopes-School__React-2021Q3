import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Format } from 'components/shared/format/format';
import { Genres } from 'components/shared/genres/genres';
import { Stats } from 'components/shared/stats/stats';
import { MediaFragment } from 'services/anilist-api/generated/search-query-types';
import { formatRecObj } from 'shared/object-utils';
import classes from './card.module.pcss';
import { Cover } from './cover';
import { Title } from './title';

export interface MediaProps {
  media: MediaFragment;
}

const getDetailsUrl = (id: number) => `/details/${id}`;

export const Card: React.FC<MediaProps> = ({ media }) => {
  return (
    <Link
      to={getDetailsUrl(media.id)}
      title={formatRecObj(media.title)}
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
        <Title title={media.title} studio={media?.studios?.nodes?.[0]?.name} />
        <Format short data={media} className={classes.format} />
        <div className={classes.genres}>
          <Genres genres={media.genres} />
        </div>
        <Stats score={media.meanScore} popularity={media.popularity} />
      </div>
    </Link>
  );
};
