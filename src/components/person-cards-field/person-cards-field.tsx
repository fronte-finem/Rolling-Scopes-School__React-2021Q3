import React from 'react';
import { PersonFormData } from 'components/person-form/state';
import { PersonCard } from 'components/person-card/person-card';
import classes from './person-cards-field.module.css';

interface PersonCardsFieldProps {
  dataArray: PersonFormData[];
}

export const PersonCardsField: React.FC<PersonCardsFieldProps> = ({
  dataArray,
}) => {
  return (
    <div className={classes.field}>
      {dataArray.map((data) => (
        <PersonCard key={data.id} data={data} />
      ))}
    </div>
  );
};
