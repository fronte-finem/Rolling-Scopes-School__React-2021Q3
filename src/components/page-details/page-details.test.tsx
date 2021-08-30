import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { EnhancedStore } from '@reduxjs/toolkit';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getStore } from 'store/store';
// import { anilistApi } from 'services/anilist-api/anilist-api';
import { getTitle, PageDetails } from './page-details';

const idStore = {
  id: '1',
  getParams() {
    return { id: this.id };
  },
};

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => idStore.getParams(),
}));

beforeEach(() => {
  jest.resetModules();
});

type StoreProps = { store: EnhancedStore<any, any, any> };

const PageDetailsWrapper = ({ store }: StoreProps) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageDetails />
      </BrowserRouter>
    </Provider>
  );
};

describe('Page Details', () => {
  it('should return title or empty string', () => {
    const english = 'english';
    const romaji = 'romaji';
    const native = 'native';
    expect(getTitle({})).toBe('');
    expect(getTitle({ native })).toBe(native);
    expect(getTitle({ romaji, native })).toBe(romaji);
    expect(getTitle({ english, romaji, native })).toBe(english);
  });
});

describe('Page Details', () => {
  it('should set loaders', async () => {
    const store = getStore();
    const { queryAllByTestId } = render(<PageDetailsWrapper store={store} />);

    let loaders = queryAllByTestId('loader');
    expect(loaders.length).toBeGreaterThan(0);

    await waitForElementToBeRemoved(loaders);

    loaders = queryAllByTestId('loader');
    expect(loaders.length).toBe(0);

    // console.log(
    //   store.getState()[anilistApi.reducerPath].queries['details({"id":1})']
    //     ?.data
    // );
  });

  it('should set document.title if media.title', async () => {
    idStore.id = '1';
    document.title = 'test';
    expect(document.title).toBe('test');

    const { queryAllByTestId } = render(
      <PageDetailsWrapper store={getStore()} />
    );
    const loaders = queryAllByTestId('loader');
    await waitForElementToBeRemoved(loaders);
    expect(document.title).toBe('test | Cowboy Bebop');
  });

  it('should not set document.title if no media.title', async () => {
    idStore.id = '42';
    document.title = 'test';
    expect(document.title).toBe('test');

    idStore.id = '42';
    const { queryAllByTestId } = render(
      <PageDetailsWrapper store={getStore()} />
    );
    const loaders = queryAllByTestId('loader');
    await waitForElementToBeRemoved(loaders);
    expect(document.title).toBe('test');
  });

  it('should show error', async () => {
    idStore.id = '0';

    const store = getStore();
    const { findByTestId } = render(<PageDetailsWrapper store={store} />);

    const error = await findByTestId('error-info-code');
    expect(error.textContent).toMatch(/Test error/);
  });
});
