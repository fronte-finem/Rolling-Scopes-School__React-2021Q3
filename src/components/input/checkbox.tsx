import React from 'react';
// import classes from './checkbox.module.css';
import { InputWrapper } from './wrapper';
import { ErrorProps, InputStaticProps } from './types';

interface CheckboxProps extends InputStaticProps, ErrorProps {
  onChange: (value: boolean) => void;
  onInvalid: () => void;
  value: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  label,
  errorMessage,
  isError,
  onChange,
  onInvalid,
  value,
  required,
}) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.checked);
  };

  return (
    <InputWrapper {...{ id, label, errorMessage, isError }}>
      <input
        type="checkbox"
        {...{ id, required }}
        name={name || id}
        onChange={handleChange}
        onInvalid={onInvalid}
        checked={value}
      />
    </InputWrapper>
  );
};
