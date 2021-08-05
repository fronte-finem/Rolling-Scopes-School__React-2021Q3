import React from 'react';
import { PersonForm } from 'components/person-form/person-form';
import classes from './app.module.css';

export const App = () => {
  return (
    <div className={classes.app}>
      <PersonForm />
    </div>
  );
};
