import React from 'react';
// import classes from './checkbox.module.css';
import { InputWrapper } from './wrapper';

interface CheckboxProps {
  id: string;
  name?: string;
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, name, label }) => {
  return (
    <InputWrapper id={id} label={label}>
      <input type="checkbox" id={id} name={name || id} />
    </InputWrapper>
  );
};
