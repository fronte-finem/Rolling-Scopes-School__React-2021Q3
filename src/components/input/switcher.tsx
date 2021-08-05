import React from 'react';
import classes from './switcher.module.css';
import { InputWrapper } from './wrapper';

export interface SwitcherProps {
  id: string;
  name?: string;
  label: string;
  value1: string;
  value2: string;
  onChange: (value: string) => void;
}

export const Switcher: React.FC<SwitcherProps> = ({
  id,
  name,
  label,
  value1,
  value2,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked ? value2 : value1);
  };

  return (
    <InputWrapper id={id} label={label}>
      <div className={classes.switcher}>
        <input
          className={classes.check}
          type="checkbox"
          id={id}
          name={name || id}
          onChange={handleChange}
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
