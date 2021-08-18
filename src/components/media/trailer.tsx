import React from 'react';
import { Maybe } from 'shared/maybe';
import { TrailerFragment } from 'services/anilist-api/generated/details-query-types';
import classes from './trailer.module.pcss';

interface TrailerProps {
  trailer: Maybe<TrailerFragment>;
}

export const Trailer: React.FC<TrailerProps> = ({ trailer }) => {
  if (!trailer) return <></>;
  if (trailer.site !== 'youtube') return <></>;
  if (!trailer.id) return <></>;
  return (
    <div className={classes.trailer}>
      <iframe
        className={classes.video}
        src={`https://www.youtube.com/embed/${trailer.id}`}
        frameBorder="0"
        allowFullScreen
        title="trailer"
      />
    </div>
  );
};
