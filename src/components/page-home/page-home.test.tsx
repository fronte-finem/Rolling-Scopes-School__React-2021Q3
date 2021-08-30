import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { EnhancedStore } from '@reduxjs/toolkit';
import {
  cleanup,
  fireEvent,
  render,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { getStore } from 'store/store';
import { MediaSort } from 'services/anilist-api/generated/schema-types';
import { setSearch } from 'store/slices/search-vars';
import { PageHome } from './page-home';

afterEach(cleanup);

type StoreProps = { store: EnhancedStore<any, any, any> };

const PageHomeWrapper = ({ store }: StoreProps) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageHome />
      </BrowserRouter>
    </Provider>
  );
};

describe('Page Home', () => {
  it('should set loaders', async () => {
    const { queryAllByTestId } = render(<PageHomeWrapper store={getStore()} />);

    let loaders = queryAllByTestId('loader');
    expect(loaders.length).toBeGreaterThan(0);

    await waitForElementToBeRemoved(loaders);

    loaders = queryAllByTestId('loader');
    expect(loaders.length).toBe(0);
  });

  it('should set paginator', async () => {
    const store = getStore();
    const { findAllByTestId } = render(<PageHomeWrapper store={store} />);

    const pageButtons = await findAllByTestId('paginator-button');
    expect(pageButtons.length).toBeGreaterThan(0);

    const lastBtn = pageButtons[pageButtons.length - 1];
    fireEvent.click(lastBtn);
    expect(store.getState().searchVars.page).toBe(+lastBtn.textContent!);
  });

  it('should set per-page selector', async () => {
    const store = getStore();
    const { findAllByTestId } = render(<PageHomeWrapper store={store} />);

    const perPageSelectors = await findAllByTestId('results-per-page');
    expect(perPageSelectors.length).toBeGreaterThan(0);

    const perPageSelect = perPageSelectors[perPageSelectors.length - 1];
    fireEvent.change(perPageSelect, { target: { value: '50' } });
    expect(store.getState().searchVars.perPage).toBe(50);
  });

  it('should set search-bar', async () => {
    const store = getStore();
    const { findByTestId } = render(<PageHomeWrapper store={store} />);

    const input = await findByTestId('search-input');
    const submit = await findByTestId('search-submit');

    fireEvent.input(input, { target: { value: 'test 42' } });
    fireEvent.click(submit);
    expect(store.getState().searchVars.search).toBe('test 42');

    fireEvent.input(input, { target: { value: '' } });
    fireEvent.click(submit);
    expect(store.getState().searchVars.search).toBeUndefined();
  });

  it('should set order-by-group', async () => {
    const store = getStore();
    const { findAllByTestId } = render(<PageHomeWrapper store={store} />);

    const orderButtons = await findAllByTestId('order-button');
    expect(orderButtons.length).toBeGreaterThan(0);

    const btn = orderButtons[0];
    fireEvent.click(btn);
    expect(store.getState().searchVars.sort).toBe(MediaSort.PopularityDesc);

    fireEvent.click(btn);
    expect(store.getState().searchVars.sort).toBe(MediaSort.Popularity);

    fireEvent.click(btn);
    expect(store.getState().searchVars.sort).toBeUndefined();
  });

  it('should show error', async () => {
    const store = getStore();
    const { findByTestId } = render(<PageHomeWrapper store={store} />);

    store.dispatch(setSearch('error'));
    expect(store.getState().searchVars.search).toBe('error');

    const error = await findByTestId('error-info-code');
    expect(error.textContent).toMatch(/Test error/);
  });
});
