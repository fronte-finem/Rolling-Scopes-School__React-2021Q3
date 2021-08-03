import React from 'react';
import { css } from '@linaria/core';
import useResizeObserver from 'use-resize-observer';
import { Card } from 'components/card/card';
import { Creature } from 'services/data/creature-scheme';
import factionsSprite from '@assets/sprites/factions.png';

interface CSSCardsGrid extends React.CSSProperties {
  '--factions-sprite-url': string;
  '--cell-size-w'?: number;
  '--cell-size-h'?: number;
}

const cardsGrid = css`
  --perspective: calc(var(--cell-size-w) * 3px);
  font-size: calc(var(--cell-size-w) / 30 * 1px);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  padding: 20px;
`;

const cardCell = css`
  transform-style: preserve-3d;
  perspective: var(--perspective);
`;

interface CardsGridProps {
  creatures: Creature[];
}

export const CardsGrid: React.FC<CardsGridProps> = ({ creatures }) => {
  const { ref, width, height } = useResizeObserver();
  const style: CSSCardsGrid = {
    '--factions-sprite-url': `url(${factionsSprite})`,
    '--cell-size-w': width,
    '--cell-size-h': height,
  };
  return (
    <div className={cardsGrid} style={style}>
      {creatures.map((creature, index) => (
        <div
          key={creature.name}
          className={cardCell}
          ref={index === 0 ? ref : undefined}>
          <Card creature={creature} />
        </div>
      ))}
    </div>
  );
};
