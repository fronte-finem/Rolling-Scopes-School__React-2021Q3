import { styled } from '@linaria/react';
import { CreatureProps, Tier } from 'services/data/creature-scheme';
import React from 'react';

const tierMap: Map<Tier, number> = new Map<Tier, number>([
  [Tier.CORE, 30],
  [Tier.ELITE, 10],
  [Tier.CHAMPION, 3],
]);

interface OverlayProps {
  tier: number;
}

const Overlay = styled.div<OverlayProps>`
  @property --start-a {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
  }

  --start-a: 0deg;
  --delta-a: ${({ tier }) => tier}deg;
  --sector-1-a: calc(var(--start-a) + var(--delta-a));
  --sector-2-a: calc(var(--start-a) + var(--delta-a) + var(--delta-a));

  --c1: hsla(var(--faction-c1), 1);
  --c2: hsla(var(--faction-c2), 1);
  --c3: hsla(var(--faction-c3), 1);

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-conic-gradient(
      var(--c1) var(--start-a) var(--sector-1-a),
      var(--c2) var(--sector-1-a) var(--sector-2-a)
    ),
    linear-gradient(-60deg, var(--c2), var(--c3), var(--c2));
  mask: radial-gradient(circle at center, #fff0 50%, #000);
  box-shadow: inset 0 0 5px 10px var(--c1);
  animation: 30s rotate linear infinite var(--animation-state);

  @keyframes rotate {
    0% {
      --start-a: 0deg;
    }
    100% {
      --start-a: 360deg;
    }
  }
`;

export const OverlayTier: React.FC<CreatureProps> = ({ creature }) => {
  return <Overlay tier={tierMap.get(creature.tier) || 60} />;
};
