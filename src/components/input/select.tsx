import React from 'react';
// import classes from './select.module.css';
import { InputWrapper } from './wrapper';

interface SelectProps {
  id: string;
  name?: string;
  label: string;
  data: Map<string, string>;
}

export const Select: React.FC<SelectProps> = ({ id, name, label, data }) => {
  return (
    <InputWrapper id={id} label={label}>
      <select id={id} name={name || id}>
        {[...data.entries()].map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};
