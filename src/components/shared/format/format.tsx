import React from 'react';
import { Maybe } from 'shared/maybe';
import { MediaFormat } from 'services/anilist-api/generated/schema-types';

const addS = (x: number) => (x > 1 ? 's' : '');

const format = (name: string, value: Maybe<number>) =>
  (value && ` • ${value} ${name}${addS(value)}`) || undefined;

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
  if (!data.format) return <></>;
  let description: Maybe<string>;
  switch (data.format) {
    case MediaFormat.Manga:
    case MediaFormat.Novel:
    case MediaFormat.OneShot:
      description = short
        ? format('chapter', data.chapters)
        : `${format('volume', data.volumes) || ''}${
            format('chapter', data.chapters) || ''
          }` || undefined;
      break;
    case MediaFormat.Movie:
    case MediaFormat.Music:
      description = format('min', data.duration);
      break;
    default:
      description = short
        ? format('episode', data.episodes)
        : `${format('episode', data.episodes) || ''}${
            format('min', data.duration) || ''
          }` || undefined;
      break;
  }
  return (
    <div className={className}>
      {data.format.split('_').join(' ')}
      {description}
    </div>
  );
};
