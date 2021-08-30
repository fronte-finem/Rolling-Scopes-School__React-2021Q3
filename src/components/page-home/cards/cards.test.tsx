import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { getStore } from 'store/store';
import { useAppSelector } from 'store/hooks';
import { useSearchQuery } from 'services/anilist-api/anilist-api';
import { Cards } from './cards';

afterEach(cleanup);

const CardsWrapper = () => {
  const Container = () => {
    const searchVars = useAppSelector((state) => state.searchVars);
    useSearchQuery(searchVars);
    return <Cards />;
  };
  return (
    <BrowserRouter>
      <Provider store={getStore()}>
        <Container />
      </Provider>
    </BrowserRouter>
  );
};

describe('Cards', () => {
  it('should load cards', async () => {
    const { queryByTestId, findByTestId } = render(<CardsWrapper />);

    let cards = queryByTestId('cards');
    expect(cards).toBeNull();

    cards = await findByTestId('cards');
    expect(cards).not.toBeNull();
  });
});
