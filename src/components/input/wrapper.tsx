import React from 'react';
import classes from './wrapper.module.css';

export interface ErrorProps {
  isError: boolean;
  message: string;
}

export interface InputWrapperProps {
  id: string;
  label: string;
  error?: ErrorProps;
}

export const InputWrapper: React.FC<InputWrapperProps> = ({
  id,
  label,
  children,
  error,
}) => {
  return (
    <label htmlFor={id} className={classes.wrapper}>
      <div className={classes.label}>{label}</div>
      <div className={classes.input}>{children}</div>
      {error?.isError && <div className={classes.error}>{error.message}</div>}
    </label>
  );
};
