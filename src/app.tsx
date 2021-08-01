import { css, cx } from '@linaria/core';
import React from 'react';
import { Card, factionTheme } from 'components/card/card';
import { getCreatures } from 'services/data/creature-sample';

const app = css`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  justify-items: center;
  padding: 20px;
`;

export const App: React.FC = () => {
  return (
    <div className={cx(app, factionTheme)}>
      {getCreatures().map((creature) => (
        <Card key={creature.name} creature={creature} />
      ))}
    </div>
  );
};
