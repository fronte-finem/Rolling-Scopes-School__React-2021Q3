import React from 'react';
import classes from './results.module.pcss';
import { PageInfoProps } from './types';

const MAX_RESULTS = 50;
const MIN_RESULTS = 5;
const STEP = 5;

interface ResultsProps extends PageInfoProps {
  onSelect: (perPage: number) => void;
}

export const Results: React.FC<ResultsProps> = ({ pageInfo, onSelect }) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(Number(event.currentTarget.value));
  };

  return (
    <div className={classes.results}>
      <div>Results ({pageInfo.total}), per page:</div>
      <select
        className={classes.selectPerPage}
        name="per-page"
        value={pageInfo.perPage || 10}
        onChange={handleSelect}>
        {Array(MAX_RESULTS / STEP)
          .fill(MIN_RESULTS)
          .map((a, i) => a + i * STEP)
          .map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};
