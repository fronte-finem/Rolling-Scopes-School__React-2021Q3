import React from 'react';
// import classes from './text.module.css';
import { ErrorProps, InputWrapper } from './wrapper';

export interface ValidateTextProps {
  isValid: (value: string) => boolean;
  message: string;
}

export interface InputTextProps {
  id: string;
  name?: string;
  label: string;
  placeholder?: string;
  onInput: (value: string) => void;
  value: string;
  error?: ErrorProps;
  required?: boolean;
}

export const InputText: React.FC<InputTextProps> = ({
  id,
  name,
  label,
  placeholder,
  onInput,
  value,
  error,
  required,
}) => {
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    onInput(event.currentTarget.value);
  };

  return (
    <InputWrapper id={id} label={label} error={error}>
      <input
        type="text"
        id={id}
        name={name || id}
        placeholder={placeholder}
        onInput={handleInput}
        value={value}
        required={required}
      />
    </InputWrapper>
  );
};
