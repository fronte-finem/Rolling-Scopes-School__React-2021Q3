import React from 'react';
import { isValue, Maybe } from 'shared/maybe';
import { MediaFormat } from 'services/anilist-api/generated/schema-types';

const addS = (x: number) => (x > 1 ? 's' : '');

export const format = (name: string, value: Maybe<number>) =>
  isValue(value) ? ` • ${value} ${name}${addS(value)}` : '';

interface FormatData {
  format?: Maybe<MediaFormat>;
  volumes?: Maybe<number>;
  chapters?: Maybe<number>;
  duration?: Maybe<number>;
  episodes?: Maybe<number>;
}
interface FormatProps {
  data: FormatData;
  short?: boolean;
  className?: string;
}

export const Format: React.FC<FormatProps> = ({ data, short, className }) => {
  if (!data.format) return null;
  const volumes = format('volume', data.volumes);
  const chapters = format('chapter', data.chapters);
  const duration = format('min', data.duration);
  const episodes = format('episode', data.episodes);
  let description: Maybe<string>;
  switch (data.format) {
    case MediaFormat.Manga:
    case MediaFormat.Novel:
    case MediaFormat.OneShot:
      description = `${short ? '' : volumes}${chapters}`;
      break;
    case MediaFormat.Movie:
    case MediaFormat.Music:
      description = duration;
      break;
    default:
      description = `${episodes}${short ? '' : duration}`;
      break;
  }
  return (
    <div className={className} data-testid="format">
      {data.format.split('_').join(' ')}
      {description}
    </div>
  );
};
