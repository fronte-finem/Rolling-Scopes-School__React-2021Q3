import React, { useState } from 'react';
import classes from './input-page.module.pcss';

export const InputPage: React.FC<{
  page: number;
  last: number;
  onChange: (page: number) => void;
}> = ({ page, last, onChange }) => {
  const [value, setValue] = useState(page);

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    let nextPage = +event.currentTarget.value;
    nextPage = nextPage > last ? last : nextPage;
    nextPage = nextPage < 1 ? 1 : nextPage;
    setValue(Math.ceil(nextPage));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onChange(value);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.form}>
        <input
          className={classes.input}
          type="number"
          value={value}
          min={1}
          max={last}
          step={1}
          required
          onInput={handleInput}
          data-testid="page-input"
        />
        <button
          type="submit"
          className={classes.submit}
          disabled={value === page}
          data-testid="page-submit">
          {value !== page && 'go'}
        </button>
      </div>
    </form>
  );
};
