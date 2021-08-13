import React from 'react';
import { PageInfoProps } from './types';
import classes from './selector.module.pcss';
import { getRange, head, tail } from './utils';
import { Button } from './button';
import { InputPage } from './input-page';

const RANGE_LENGTH = 5;

interface SelectorProps extends PageInfoProps {
  onSelect: (page: number) => void;
}

export const Selector: React.FC<SelectorProps> = ({ pageInfo, onSelect }) => {
  const current = pageInfo.currentPage || 1;
  const last = pageInfo.lastPage || 1;

  const range = getRange(current, last, RANGE_LENGTH);
  const firstInRange = head(range) === 1;
  const lastInRange = tail(range) === last;

  const handlePageSelect = (page: number) => {
    onSelect(page);
  };

  return (
    <ul className={classes.selector}>
      {!firstInRange && (
        <li className={`${classes.edge} ${classes.first}`}>
          <Button page={1} onClick={handlePageSelect} />
        </li>
      )}
      {range.map((num) => {
        return (
          <li key={num}>
            {num === current ? (
              <InputPage page={num} last={last} onChange={handlePageSelect} />
            ) : (
              <Button page={num} onClick={handlePageSelect} />
            )}
          </li>
        );
      })}
      {!lastInRange && (
        <li className={`${classes.edge} ${classes.last}`}>
          <Button page={last} onClick={handlePageSelect} />
        </li>
      )}
    </ul>
  );
};
