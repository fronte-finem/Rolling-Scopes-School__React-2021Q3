import React from 'react';
import { ErrorProps, InputStaticProps } from './types';
import { InputWrapper } from './wrapper';
import classes from './radio-switcher.module.css';

export interface RadioSwitcherStaticProps extends InputStaticProps, ErrorProps {
  values: string[];
}

export interface RadioSwitcherProps extends RadioSwitcherStaticProps {
  onChange: (value: string) => void;
  onInvalid: () => void;
  value: string;
}

export const RadioSwitcher: React.FC<RadioSwitcherProps> = ({
  id,
  name,
  label,
  onChange,
  onInvalid,
  values,
  value,
  errorMessage,
  isError,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <InputWrapper {...{ id, label, errorMessage, isError }}>
      <ul className={classes.radioSwitcher}>
        {values.map((currentValue) => {
          const customId = `${name || id}-${currentValue}`;
          return (
            <li className={classes.radioElement} key={customId}>
              <label className={classes.radioLabel} htmlFor={customId}>
                <input
                  type="radio"
                  id={customId}
                  name={name}
                  value={currentValue}
                  checked={currentValue === value}
                  onChange={handleChange}
                  onInvalid={onInvalid}
                />
                {currentValue}
              </label>
            </li>
          );
        })}
      </ul>
    </InputWrapper>
  );
};
