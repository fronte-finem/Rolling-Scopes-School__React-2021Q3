import React, { CSSProperties } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { HistoryState } from 'components/app/routing-types';
import { Format } from 'components/format/format';
import classes from './card.module.pcss';
import { Genres } from '../genres/genres';
import { Cover } from './cover';
import { Title } from './title';
import { MediaProps } from './types';
import { Stats } from '../stats/stats';

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
      style={
        {
          '--card-bg-c': media.coverImage?.color || '#fff',
          '--card-bg-i':
            (media.coverImage?.large && `url(${media.coverImage?.large})`) ||
            'unset',
        } as CSSProperties
      }
      onClick={onClick}>
      <Cover media={media} />
      <div className={classes.container}>
        <Title media={media} />
        <Format short data={media} className={classes.format} />
        <div className={classes.genres}>
          <Genres genres={media.genres} />
        </div>
        <Stats mediaStats={media} />
      </div>
    </Link>
  );
};
