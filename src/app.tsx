import React from 'react';
import { css } from '@linaria/core';
import { SearchBar } from 'components/search-bar/search-bar';
import { CardsGrid } from 'components/cards-grid/cards-grid';
import { getCreatures } from 'services/data/creature-sample';

const appContainer = css`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  background: #0008;
`;

export const App: React.FC = () => {
  return (
    <div className={appContainer}>
      <SearchBar />
      <CardsGrid creatures={getCreatures()} />
    </div>
  );
};
