import React, { CSSProperties } from 'react';
import {
  MediaFragment,
  MediaStatus,
} from 'services/anilist-api/generated/types';
import { withSprite } from 'components/svg/svg';
import iconsSprite from 'assets/sprites/icons.svg';
import flagsSprite from 'assets/sprites/flags.svg';
import { CountryCodeMap } from 'shared/country-code';
import { mapGetter } from 'shared/maybe';
import classes from './cover.module.pcss';

const Icons = withSprite(iconsSprite);
const Flag = withSprite(flagsSprite);

const StatusMap: Map<MediaStatus, { text: string; color: string }> = new Map([
  [MediaStatus.NotYetReleased, { text: 'Announced', color: '#ff0' }],
  [MediaStatus.Releasing, { text: 'Ongoing', color: '#f80' }],
  [MediaStatus.Hiatus, { text: 'Paused', color: '#888' }],
  [MediaStatus.Cancelled, { text: 'Cancelled', color: '#333' }],
  [MediaStatus.Finished, { text: 'Completed', color: '#08f' }],
]);
const getStatus = mapGetter(StatusMap);
const getCountry = mapGetter(CountryCodeMap);

interface MediaProps {
  media: MediaFragment;
}

export const Cover: React.FC<MediaProps> = ({ media }) => {
  const countryOfOrigin = getCountry(media.countryOfOrigin);
  const status = getStatus(media.status);

  if (!media.coverImage) return <></>;
  return (
    <div className={classes.cover}>
      {media.coverImage.large && (
        <img
          className={classes.cover__image}
          src={media.coverImage.large}
          alt={media.title?.english || media.title?.native || 'cover'}
        />
      )}
      {media.isAdult && (
        <div className={classes.plus18}>
          <Icons name="18-plus" />
        </div>
      )}
      {status && (
        <div
          className={classes.status}
          style={{ '--color': status.color } as CSSProperties}>
          {status.text}
        </div>
      )}
      <div className={classes.overlay}>
        {countryOfOrigin && (
          <div className={classes.flag} title={countryOfOrigin}>
            <Flag name={countryOfOrigin} />
          </div>
        )}
        {media.startDate?.year && (
          <div className={classes.year}>{media.startDate.year}</div>
        )}
      </div>
    </div>
  );
};
