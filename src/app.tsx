import { css } from '@linaria/core';
import React from 'react';

const header = css`
  text-transform: uppercase;
  text-align: center;
  font-family: sans-serif;
  font-size: 200px;
  background: #004;
  color: #88f;
`;

export const App: React.FC = () => <h1 className={header}>Test!!!</h1>;
