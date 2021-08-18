import React from 'react';
import { isNone, Maybe } from 'shared/maybe';
import classes from './banner.module.pcss';

interface BannerProps {
  url?: Maybe<string>;
}

export const Banner: React.FC<BannerProps> = ({ url }) => {
  if (isNone(url)) return <></>;
  return (
    <div className={classes.banner}>
      <img className={classes.bannerImage} src={url} alt="banner" />
    </div>
  );
};
