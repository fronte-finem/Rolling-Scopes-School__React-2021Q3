import React from 'react';
import { css } from '@linaria/core';
import { Icon, IconName } from 'components/icon/icon';

const formContainer = css`
  display: flex;
  justify-content: center;
  padding: 50px 20px;
`;

const inputContainer = css`
  --fg: #08f;
  --bg: #048;
  position: relative;
  max-width: 600px;
  width: 100%;
  height: 40px;
  background: var(--bg);
  border-radius: 20px;
  box-shadow: 0 0 0 3px var(--fg);
`;

const input = css`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  color: var(--fg);
  font-family: var(--ff-main);
  font-size: 25px;
`;

const iconContainer = css`
  --size: 50px;
  position: absolute;
  top: 2px;
  left: -10px;
  width: var(--size);
  height: var(--size);

  svg {
    fill: #fff;
  }
`;

export function SearchBar() {
  return (
    <form>
      <div className={formContainer}>
        <div className={inputContainer}>
          <div className={iconContainer}>
            <Icon name={IconName.MAGNIFYING_GLASS} />
          </div>
          <input className={input} type="text" />
        </div>
      </div>
    </form>
  );
}
