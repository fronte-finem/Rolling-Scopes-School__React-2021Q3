import React from 'react';
import classes from './wrapper.module.css';
import { ErrorProps, InputStaticProps } from './types';

export const InputWrapper: React.FC<InputStaticProps & ErrorProps> = ({
  id,
  label,
  errorMessage,
  children,
  isError,
}) => {
  return (
    <label
      htmlFor={id}
      className={`${classes.wrapper} ${isError ? classes.error : ''}`}>
      <div className={classes.label}>{label}</div>
      <div className={classes.input}>{children}</div>
      {isError && <div className={classes.errorMessage}>{errorMessage}</div>}
    </label>
  );
};
