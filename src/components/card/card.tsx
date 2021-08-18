import React, { CSSProperties } from 'react';
import { useHistory } from 'react-router-dom';
import { Format } from 'components/format/format';
import classes from './card.module.pcss';
import { Genres } from '../genres/genres';
import { Cover } from './cover';
import { Title } from './title';
import { MediaProps } from './types';
import { Stats } from '../stats/stats';

export const Card: React.FC<MediaProps> = ({ media }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/details/${media.id}`);
  };

  return (
    <div
      role="link"
      tabIndex={0}
      className={classes.card}
      style={
        {
          '--card-bg-c': media.coverImage?.color || '#fff',
          '--card-bg-i':
            (media.coverImage?.large && `url(${media.coverImage?.large})`) ||
            'unset',
        } as CSSProperties
      }
      onClick={handleClick}
      onKeyDown={handleClick}>
      <Cover media={media} />
      <div className={classes.container}>
        <Title media={media} />
        <Format short data={media} className={classes.format} />
        <div className={classes.genres}>
          <Genres genres={media.genres} />
        </div>
        <Stats mediaStats={media} />
      </div>
    </div>
  );
};
