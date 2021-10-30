import React, { CSSProperties } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HistoryState } from 'components/app/routing-types';
import { Format } from 'components/shared/format/format';
import { Genres } from 'components/shared/genres/genres';
import { Stats } from 'components/shared/stats/stats';
import { MediaFragment } from 'services/anilist-api/generated/search-query-types';
// import { formatRecObj } from 'shared/object-utils';
import classes from './card.module.pcss';
import { Cover } from './cover';
import { Title } from './title';

export interface MediaProps {
  media: MediaFragment;
}

const getDetailsUrl = (id: number) => `/details/${id}`;

export const Card: React.FC<MediaProps> = ({ media }) => {
  const history = useHistory<HistoryState>();

  const onClick = (ev: React.MouseEvent) => {
    ev.preventDefault();
    ev.stopPropagation();
    history.push({
      pathname: getDetailsUrl(media.id),
      state: {
        previousRouteNum: 0,
        currentRouteNum: Infinity,
      },
    });
  };

  return (
    <Link
      to={getDetailsUrl(media.id)}
      className={classes.card}
      onClick={onClick}
      style={
        {
          '--card-bg-c': media.coverImage?.color || '#fff',
          '--card-bg-i':
            (media.coverImage?.large && `url(${media.coverImage?.large})`) ||
            'unset',
        } as CSSProperties
      }
      data-testid="card">
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
