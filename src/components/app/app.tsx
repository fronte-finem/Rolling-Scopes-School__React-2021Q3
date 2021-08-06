import React, { useState } from 'react';
import { PersonForm } from 'components/person-form/person-form';
import classes from './app.module.css';
import { PersonFormData } from '../person-form/state';
import { PersonCardsField } from '../person-cards-field/person-cards-field';

export const App = () => {
  const [dataArray, setDataArray] = useState<PersonFormData[]>([]);

  const handleSubmit = (data: PersonFormData) => {
    setDataArray((prev) => [...prev, data]);
  };

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <div className={classes.containerForm}>
          <PersonForm onSubmit={handleSubmit} />
        </div>
        <div className={classes.containerField}>
          <PersonCardsField dataArray={dataArray} />
        </div>
      </div>
    </div>
  );
};
