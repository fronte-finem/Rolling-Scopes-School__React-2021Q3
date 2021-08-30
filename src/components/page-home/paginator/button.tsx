import React from 'react';
import classes from './button.module.pcss';

export const Button: React.FC<{
  page: number;
  disabled?: boolean;
  onClick: (page: number) => void;
}> = ({ page, disabled, onClick }) => {
  return (
    <button
      type="button"
      className={classes.button}
      disabled={disabled}
      onClick={() => onClick(page)}
      data-testid="paginator-button">
      {page}
    </button>
  );
};
