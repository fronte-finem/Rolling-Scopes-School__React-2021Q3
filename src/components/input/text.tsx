import React from 'react';
// import classes from './text.module.css';
import { InputWrapper } from './wrapper';
import { ErrorProps, InputStaticProps } from './types';

export enum InputTextType {
  TEXT = 'text',
  EMAIL = 'email',
  PASSWORD = 'password',
}

export interface InputTextStaticProps extends InputStaticProps, ErrorProps {
  type?: InputTextType;
}

export interface InputTextProps extends InputTextStaticProps {
  onInput: (value: string) => void;
  onInvalid: () => void;
  value: string;
}

export const InputText: React.FC<InputTextProps> = ({
  type = InputTextType.TEXT,
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
        type={type}
        name={name || id}
        onInput={handleInput}
        onInvalid={onInvalid}
      />
    </InputWrapper>
  );
};
