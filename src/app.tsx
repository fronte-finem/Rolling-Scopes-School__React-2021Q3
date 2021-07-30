import { css } from '@linaria/core';
import React from 'react';
import { Card } from 'components/card/card';
import { getData } from 'services/data/data-sample';

const app = css`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  justify-content: center;
  justify-items: center;
  padding: 20px;
`;

export const App: React.FC = () => {
  return (
    <div className={app}>
      {getData().map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};
