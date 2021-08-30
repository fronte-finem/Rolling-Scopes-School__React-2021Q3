import React from 'react';
import { Maybe } from 'shared/maybe';
import classes from './banner.module.pcss';

interface BannerProps {
  url?: Maybe<string>;
}

export const Banner: React.FC<BannerProps> = ({ url }) => {
  if (!url) return null;
  return (
    <div className={classes.banner} data-testid="banner">
      <img
        className={classes.bannerImage}
        src={url}
        alt="banner"
        data-testid="banner-image"
      />
    </div>
  );
};
