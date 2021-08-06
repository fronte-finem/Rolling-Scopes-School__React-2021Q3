import React from 'react';
import classes from './select.module.css';
import { InputWrapper } from './wrapper';
import { ErrorProps, InputStaticProps } from './types';

export interface SelectStaticProps extends InputStaticProps, ErrorProps {
  data: Map<string, string>;
}

export interface SelectProps extends SelectStaticProps {
  value: string;
  onInput: (value: string) => void;
  onInvalid: () => void;
}

export const Select: React.FC<SelectProps> = ({
  id,
  name,
  label,
  data,
  errorMessage,
  isError,
  value,
  onInput,
  onInvalid,
}) => {
  const handleInput = (event: React.FormEvent<HTMLSelectElement>) => {
    onInput(event.currentTarget.value);
  };

  return (
    <InputWrapper {...{ id, label, errorMessage, isError }}>
      <select
        className={classes.select}
        {...{ id, value }}
        name={name || id}
        onInput={handleInput}
        onInvalid={onInvalid}>
        {[...data.entries()].map(([key, description]) => (
          <option key={key} value={key}>
            {description}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};
