import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app/app';

const initApp = () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.append(root);

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
};

initApp();
