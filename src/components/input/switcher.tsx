import React from 'react';
import { InputWrapper } from './wrapper';
import classes from './switcher.module.css';
import { ErrorProps, InputStaticProps } from './types';

export interface SwitcherStaticProps extends InputStaticProps, ErrorProps {
  value1: string;
  value2: string;
}

export interface SwitcherProps extends SwitcherStaticProps {
  onChange: (value: string) => void;
  onInvalid: () => void;
  value: string;
}

export const Switcher: React.FC<SwitcherProps> = ({
  id,
  name,
  label,
  value1,
  value2,
  onChange,
  onInvalid,
  value,
  errorMessage,
  isError,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked ? value2 : value1);
  };

  return (
    <InputWrapper {...{ id, label, errorMessage, isError }}>
      <div className={classes.switcher}>
        <input
          className={classes.check}
          type="checkbox"
          id={id}
          name={name || id}
          onChange={handleChange}
          onInvalid={onInvalid}
          checked={value === value2}
        />
        <div className={classes.plank}>
          <div className={classes.value}>{value1}</div>
          <div className={classes.handle} />
          <div className={classes.value}>{value2}</div>
        </div>
      </div>
    </InputWrapper>
  );
};
