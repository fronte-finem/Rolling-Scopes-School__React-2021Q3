import React, { CSSProperties } from 'react';
import classes from './media.module.pcss';
import { MediaProps } from './types';
import { Header } from './header';
import { Banner } from './banner';
import { Cover } from './cover';
import { Trailer } from './trailer';
import { Characters } from './characters';

export const Media: React.FC<MediaProps> = ({ media }) => {
  return (
    <div
      className={classes.media}
      style={
        {
          '--main-c': media.coverImage?.color || '#fff',
          '--top-offset': media.bannerImage ? '200px' : '20px',
        } as CSSProperties
      }
      data-testid="media">
      <Banner url={media.bannerImage} />
      <section className={classes.content}>
        <div className={classes.cover}>
          <Cover coverImage={media.coverImage} />
        </div>
        <div className={classes.header}>
          <Header media={media} />
        </div>
        <div className={classes.body}>
          <Trailer trailer={media.trailer} />
          <Characters characters={media.characters} />
        </div>
      </section>
    </div>
  );
};
