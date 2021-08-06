import React from 'react';
// import classes from './text.module.css';
import { InputWrapper } from './wrapper';
import { ErrorProps, InputStaticProps } from './types';

export interface InputTextProps extends InputStaticProps, ErrorProps {
  onInput: (value: string) => void;
  onInvalid: () => void;
  value: string;
}

export const InputText: React.FC<InputTextProps> = ({
  id,
  name,
  label,
  placeholder,
  onInput,
  onInvalid,
  value,
  errorMessage,
  isError,
  required,
}) => {
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    onInput(event.currentTarget.value);
  };

  return (
    <InputWrapper {...{ id, label, errorMessage, isError }}>
      <input
        {...{ id, placeholder, required, value }}
        type="text"
        name={name || id}
        onInput={handleInput}
        onInvalid={onInvalid}
      />
    </InputWrapper>
  );
};
