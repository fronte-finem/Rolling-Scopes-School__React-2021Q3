import '@assets/styles/reset.css';
import '@assets/styles/fonts.css';
import '@assets/styles/main.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './app';

const render = () => {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);

  ReactDOM.render(<App />, root);
};

render();
