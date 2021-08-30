import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const Root = (): JSX.Element => (
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

const initApp = () => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.append(root);

  ReactDOM.render(<Root />, root);
};

initApp();
