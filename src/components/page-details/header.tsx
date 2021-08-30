import React from 'react';
import { getCountry } from 'shared/country-code';
import { TitleFragment } from 'services/anilist-api/generated/search-query-types';
import { Format } from 'components/shared/format/format';
import { Status } from 'components/shared/status/status';
import { Flag } from 'components/shared/svg/sprites';
import { Stats } from 'components/shared/stats/stats';
import { Info } from 'components/shared/info/info';
import { Genres } from 'components/shared/genres/genres';
import { MediaProps } from './types';
import classes from './header.module.pcss';
import { Description } from './description';

export const formatSource = (source: string) =>
  source.toLowerCase().split('_').join(' ');

const isTitleDiff = ({ english, romaji }: TitleFragment): boolean =>
  english?.toLowerCase() !== romaji?.toLowerCase();

export const Header: React.FC<MediaProps> = ({ media }) => {
  const countryOfOrigin = getCountry(media.countryOfOrigin);

  return (
    <header className={classes.header}>
      <div className={classes.head}>
        <div className={classes.title}>
          {media.title?.romaji && (
            <h2 className={classes.heading}>{media.title.romaji}</h2>
          )}
          {media.title?.english && isTitleDiff(media.title) && (
            <h2 className={classes.heading}>{media.title.english}</h2>
          )}
          {media.title?.native && (
            <h3 className={classes.heading}>{media.title.native}</h3>
          )}
          <div className={classes.origin}>
            <div className={classes.flag}>
              {countryOfOrigin && <Flag name={countryOfOrigin} />}
            </div>
            {media.studios?.nodes?.[0]?.name && (
              <Info info={media.studios.nodes[0].name} icon="home" />
            )}
          </div>
        </div>
        <div className={classes.info}>
          <Format className={classes.format} data={media} />
          <div className={classes.source}>
            source: {media.source && formatSource(media.source)}
          </div>
          <div className={classes.stats}>
            <Stats popularity={media.popularity} score={media.meanScore} />
          </div>
          <div className={classes.status}>
            <div className={classes.date}>
              {media.seasonYear ? media.seasonYear : media.startDate?.year}
              {media.endDate?.year && ` - ${media.endDate.year}`}
            </div>
            <Status mediaStatus={media.status} />
          </div>
          {media.isAdult && <div>18+</div>}
        </div>
      </div>
      <div className={classes.genres}>
        <Genres genres={media.genres} />
      </div>
      <Description text={media.description} />
    </header>
  );
};
