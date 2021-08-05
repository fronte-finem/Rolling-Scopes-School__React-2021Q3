import React from 'react';
// import classes from './date.module.css';
import { ErrorProps, InputWrapper } from './wrapper';

export const dateToString = (date: Date) => date.toISOString().split('T')[0];

interface InputDateProps {
  id: string;
  name?: string;
  label: string;
  onInput: (value: Date | null) => void;
  value: string;
  min?: string;
  max?: string;
  error?: ErrorProps;
}

export const InputDate: React.FC<InputDateProps> = ({
  id,
  name,
  label,
  onInput,
  value,
  min,
  max,
  error,
}) => {
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    onInput(event.currentTarget.valueAsDate);
  };

  return (
    <InputWrapper id={id} label={label} error={error}>
      <input
        type="date"
        id={id}
        name={name || id}
        onInput={handleInput}
        value={value}
        min={min}
        max={max}
        required
        pattern="\d{4}-\d{2}-\d{2}"
      />
    </InputWrapper>
  );
};
