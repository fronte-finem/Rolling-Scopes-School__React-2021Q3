import React from 'react';
import { css } from '@linaria/core';
import { CreatureProps } from 'services/data/creature-scheme';

const title = css`
  --c1: hsla(var(--faction-c1), 0.75);
  --c2: hsla(var(--faction-c1), 1);

  width: 100%;
  text-align: center;
  font-family: var(--ff-title);
  font-size: 3em;
  background-color: hsla(var(--faction-c3), 0.5);

  a {
    text-decoration: none;
    transition: color 200ms;
    color: var(--c1);

    &:hover {
      color: var(--c2);
    }

    &:active {
      color: var(--c2);
    }
  }
`;

export const Title: React.FC<CreatureProps> = ({ creature }) => {
  return (
    <div className={title}>
      {creature.wikiUrl ? (
        <a
          href={creature.wikiUrl}
          title={`${creature.name}\nFaction: ${creature.faction}\nTier: ${creature.tier}`}
          target="_blank"
          rel="noreferrer">
          {creature.name}
        </a>
      ) : (
        <span title={creature.tier}>{creature.name}</span>
      )}
    </div>
  );
};
