import React from 'react';
import classes from './date.module.css';
import { InputWrapper } from './wrapper';
import { ErrorProps, InputStaticProps } from './types';

export interface InputDateStaticProps extends InputStaticProps, ErrorProps {
  min?: string;
  max?: string;
}

export interface InputDateProps extends InputDateStaticProps {
  onInput: (value: Date | null) => void;
  onInvalid: () => void;
  value: string;
}

export const InputDate: React.FC<InputDateProps> = ({
  id,
  name,
  label,
  onInput,
  onInvalid,
  value,
  min,
  max,
  isError,
  errorMessage,
  required,
}) => {
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    onInput(event.currentTarget.valueAsDate);
  };

  return (
    <InputWrapper {...{ id, label, errorMessage, isError }}>
      <input
        className={`${classes.date} ${classes.clickable} ${classes.half}`}
        type="date"
        {...{ id, min, max, value, required }}
        name={name || id}
        onInput={handleInput}
        onInvalid={onInvalid}
        pattern="\d{4}-\d{2}-\d{2}"
      />
    </InputWrapper>
  );
};
