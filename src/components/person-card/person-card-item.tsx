import React from 'react';
import classes from './person-card-item.module.css';

interface PersonCardItemProps {
  term: string;
  description: string;
}

export const PersonCardItem: React.FC<PersonCardItemProps> = ({
  term,
  description,
}) => {
  return (
    <>
      <dt className={`${classes.cell} ${classes.term}`}>{term}:</dt>
      <dd className={`${classes.cell} ${classes.description}`}>
        {description}
      </dd>
    </>
  );
};
