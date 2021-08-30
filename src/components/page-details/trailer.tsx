import React from 'react';
import { Maybe } from 'shared/maybe';
import { TrailerFragment } from 'services/anilist-api/generated/details-query-types';
import classes from './trailer.module.pcss';

interface TrailerProps {
  trailer?: Maybe<TrailerFragment>;
}

const getYoutubeUrl = (id: string) => `https://www.youtube.com/embed/${id}`;

export const Trailer: React.FC<TrailerProps> = ({ trailer }) => {
  if (!trailer) return null;
  if (trailer.site !== 'youtube') return null;
  if (!trailer.id) return null;
  return (
    <div className={classes.trailer} data-testid="trailer">
      <iframe
        className={classes.video}
        src={getYoutubeUrl(trailer.id)}
        frameBorder="0"
        allowFullScreen
        title="trailer"
        data-testid="trailer-video"
      />
    </div>
  );
};
