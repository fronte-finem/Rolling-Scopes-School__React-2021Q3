import React from 'react';
import { css, cx } from '@linaria/core';
import { CreatureProps } from 'services/data/creature-scheme';
import { ConvertStats, StatView } from './stat-view';
import { Title } from './title';
import { CostView } from './cost-view';
import { OverlayTier } from './overlay';
import { Image } from './image';
import { factionThemeMap } from './faction-theme';
import { FactionSymbol } from './faction-symbol';

const card = css`
  font-size: 1em;
  position: relative;
  width: 100%;
  aspect-ratio: 5 / 4;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 0.3em 0.3em #0004;
  transition: all 200ms;
  filter: contrast(1.1) grayscale(0.5);

  --animation-state: paused;
  &:hover {
    --animation-state: running;
  }
`;

const upgraded = css`
  filter: contrast(1.1) saturate(1.1);
`;

const container = css`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  row-gap: 1em;
`;

const titleContainer = css``;

const statsContainer = css`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 2.5em);
  row-gap: 0.5em;
  column-gap: 40%;
  padding: 0 0.5em;
`;

const costContainer = css`
  width: 100%;
  margin-bottom: auto;
  display: flex;
  gap: 1em;
  padding: 0.5em;
`;

export const Card: React.FC<CreatureProps> = ({ creature }) => {
  return (
    <div
      className={cx(
        card,
        factionThemeMap.get(creature.faction),
        creature.upgraded && upgraded
      )}>
      <Image src={creature.imageUrl} alt={creature.name} />
      <OverlayTier creature={creature} />
      <div className={container}>
        <div className={titleContainer}>
          <Title creature={creature} />
        </div>
        <div className={statsContainer}>
          <StatView {...ConvertStats.Attack(creature)} />
          <StatView {...ConvertStats.Defense(creature)} />
          <StatView {...ConvertStats.Health(creature)} />
          <StatView {...ConvertStats.Damage(creature)} />
          <StatView {...ConvertStats.Initiative(creature)} reverse />
          <StatView {...ConvertStats.Move(creature)} reverse />
          <StatView {...ConvertStats.Morale(creature)} reverse />
          <StatView {...ConvertStats.Destiny(creature)} reverse />
        </div>
        <div className={costContainer}>
          {creature.cost.map((cost) => (
            <CostView key={cost.resource} cost={cost} />
          ))}
        </div>
      </div>
      <FactionSymbol title={creature.faction} />
    </div>
  );
};
