import { css, cx } from '@linaria/core';
import React from 'react';
import { Icon, IconName } from 'components/icon/icon';
import { Cost, Resource } from 'services/data/creature-scheme';

const costContainer = css`
  --fg: #111;
  --bg: #fff8;
  height: 2.5em;
  display: flex;
  gap: 0.5em;
  align-items: center;
  padding: 0 1em;
  border-radius: 2em;
  background-color: var(--bg);
  cursor: default;
`;

const styleGold = css`
  --fg: #fa0;
  --bg: #4108;
`;
const styleCrystal = css`
  --fg: #88f;
  --bg: #1148;
`;
const styleStarsilver = css`
  --fg: #adf;
  --bg: #1238;
`;
const styleShadowsteel = css`
  --fg: #111;
  --bg: #0004;
`;
const styleDragnsteel = css`
  --fg: #f84;
  --bg: #3218;
`;

const iconContainer = css`
  width: 2em;
  height: 2em;
  svg {
    fill: var(--fg);
  }
`;

const textContainer = css`
  font-family: var(--ff-main);
  font-size: 1em;
  color: var(--fg);
`;

const resourceStyleMap: Map<Resource, string> = new Map([
  [Resource.GOLD, styleGold],
  [Resource.CRYSTAL, styleCrystal],
  [Resource.STARSILVER, styleStarsilver],
  [Resource.SHADOWSTEEL, styleShadowsteel],
  [Resource.DRAGONSTEEL, styleDragnsteel],
]);

const resourceIconMap: Map<Resource, IconName> = new Map([
  [Resource.GOLD, IconName.CASH],
  [Resource.CRYSTAL, IconName.SAPHIR],
  [Resource.STARSILVER, IconName.ICE_CUBE],
  [Resource.SHADOWSTEEL, IconName.METAL_BAR],
  [Resource.DRAGONSTEEL, IconName.BLACK_BAR],
]);

interface CostProps {
  cost: Cost;
}

export const CostView: React.FC<CostProps> = ({ cost }) => {
  const icon = (
    <div className={iconContainer}>
      <Icon name={resourceIconMap.get(cost.resource) || IconName.CASH} />
    </div>
  );

  const text = <div className={textContainer}>{cost.amount}</div>;

  return (
    <div
      className={cx(costContainer, resourceStyleMap.get(cost.resource))}
      title={cost.resource}>
      {icon}
      {cost.resource !== Resource.GOLD ? cost.amount > 1 && icon : text}
    </div>
  );
};
