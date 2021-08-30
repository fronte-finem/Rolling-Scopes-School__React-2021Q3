import React from 'react';
import { isNone, Maybe } from 'shared/maybe';
import { Info } from 'components/shared/info/info';
import classes from './stats.module.pcss';

interface StatsProps {
  popularity?: Maybe<number>;
  score?: Maybe<number>;
}

export const Stats: React.FC<StatsProps> = ({ popularity, score }) => {
  if (isNone(popularity) && isNone(score)) return null;
  return (
    <div className={classes.stats}>
      {score && <Info info={score / 10} icon="star" />}
      {popularity && <Info info={popularity} icon="people" />}
    </div>
  );
};
