import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { EnhancedStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { getStore } from 'store/store';
import { App } from './app';

type StoreProps = { store: EnhancedStore<any, any, any> };

const AppWrapper = ({ store }: StoreProps) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe('App', () => {
  it('should contain header and main', () => {
    const store = getStore();
    const { queryByTestId } = render(<AppWrapper store={store} />);

    expect(queryByTestId('header')).not.toBeNull();
    expect(queryByTestId('main')).not.toBeNull();
  });
});
