import React from 'react';
import { getCountry } from 'shared/country-code';
import { Status } from 'components/shared/status/status';
import { Flag, Icon } from 'components/shared/svg/sprites';
import { MediaFragment } from 'services/anilist-api/generated/search-query-types';
import classes from './cover.module.pcss';

export interface MediaProps {
  media: MediaFragment;
}

export const Cover: React.FC<MediaProps> = ({ media }) => {
  const countryOfOrigin = getCountry(media.countryOfOrigin);

  return (
    <div className={classes.cover}>
      {media.coverImage?.large && (
        <img
          className={classes.coverImage}
          src={media.coverImage.large}
          alt={media.title?.english || media.title?.native || 'cover'}
          data-testid="cover-image"
        />
      )}
      {media.isAdult && (
        <div className={classes.plus18}>
          <Icon name="18-plus" />
        </div>
      )}
      <div className={classes.status}>
        <Status mediaStatus={media.status} />
      </div>
      <div className={classes.overlay}>
        {countryOfOrigin && (
          <div className={classes.flag} title={countryOfOrigin}>
            <Flag name={countryOfOrigin} />
          </div>
        )}
        <div className={classes.year} data-testid="cover-year">
          {media.seasonYear ||
            media.startDate?.year ||
            `> ${new Date().getFullYear() + 2}`}
        </div>
      </div>
    </div>
  );
};
