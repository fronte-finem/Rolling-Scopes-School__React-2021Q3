import React from 'react';
import { getCountry } from 'shared/country-code';
import { Status } from 'components/status/status';
import { Flag, Icon } from 'components/svg/sprites';
import classes from './cover.module.pcss';
import { MediaProps } from './types';

export const Cover: React.FC<MediaProps> = ({ media }) => {
  const countryOfOrigin = getCountry(media.countryOfOrigin);

  if (!media.coverImage) return <></>;
  return (
    <div className={classes.cover}>
      {media.coverImage.large && (
        <img
          className={classes.coverImage}
          src={media.coverImage.large}
          alt={media.title?.english || media.title?.native || 'cover'}
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
        <div className={classes.year}>
          {media.seasonYear ||
            media.startDate?.year ||
            `> ${new Date().getFullYear() + 2}`}
        </div>
      </div>
    </div>
  );
};
