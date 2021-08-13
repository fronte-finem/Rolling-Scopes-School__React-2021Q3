import React from 'react';
import { Maybe } from 'shared/maybe';
import {
  MediaFormat,
  MediaFragment,
} from 'services/anilist-api/generated/types';
import classes from './format.module.pcss';

const addS = (x: number) => (x > 1 ? 's' : '');

const format = (x: Maybe<number>, name: string) =>
  (x && ` • ${x} ${name}${addS(x)}`) || undefined;

interface FormatProps {
  media: MediaFragment;
}

export const Format: React.FC<FormatProps> = ({ media }) => {
  if (!media.format) return <></>;
  let description: Maybe<string>;
  switch (media.format) {
    case MediaFormat.Manga:
    case MediaFormat.Novel:
    case MediaFormat.OneShot:
      description = format(media.chapters, 'chapter');
      break;
    case MediaFormat.Movie:
    case MediaFormat.Music:
      description = format(media.duration, 'min');
      break;
    default:
      description = format(media.episodes, 'episode');
      break;
  }
  return (
    <div className={classes.format}>
      {media.format.split('_').join(' ')}
      {description}
    </div>
  );
};
