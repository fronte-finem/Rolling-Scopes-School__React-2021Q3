import React from 'react';
import { Maybe } from 'shared/maybe';
import { Info } from 'components/shared/info/info';
import classes from './stats.module.pcss';

export const Stats: React.FC<{
  mediaStats: { popularity?: Maybe<number>; meanScore?: Maybe<number> };
}> = ({ mediaStats: { meanScore, popularity } }) => {
  return (
    <div className={classes.stats}>
      {meanScore && <Info info={meanScore / 10} icon="star" />}
      {popularity && <Info info={popularity} icon="people" />}
    </div>
  );
};
