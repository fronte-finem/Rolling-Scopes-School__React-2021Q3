import { css } from '@linaria/core';
import { Faction } from 'services/data/creature-scheme';

const haven = css`
  --faction-pos: 0 -90px;
  --faction-c1: 202deg, 80%, 24%;
  --faction-c2: 199deg, 66%, 69%;
  --faction-c3: 168deg, 37%, 87%;
`;
const academy = css`
  --faction-pos: -360px -90px;
  --faction-c1: 39deg, 100%, 27%;
  --faction-c2: 53deg, 100%, 50%;
  --faction-c3: 58deg, 100%, 50%;
`;
const necropolis = css`
  --faction-pos: -180px -90px;
  --faction-c1: 0deg, 0%, 0%;
  --faction-c2: 0deg, 0%, 10%;
  --faction-c3: 0deg, 0%, 20%;
`;
const stronghold = css`
  --faction-pos: -90px -90px;
  --faction-c1: 37deg, 95%, 15%;
  --faction-c2: 42deg, 90%, 36%;
  --faction-c3: 40deg, 94%, 47%;
`;
const sylvan = css`
  --faction-pos: -720px -90px;
  --faction-c1: 96deg, 93%, 26%;
  --faction-c2: 71deg, 71%, 55%;
  --faction-c3: 58deg, 97%, 58%;
`;
const dungeon = css`
  --faction-pos: -630px -90px;
  --faction-c1: 272deg, 40%, 9%;
  --faction-c2: 275deg, 41%, 29%;
  --faction-c3: 275deg, 41%, 36%;
`;
const fortress = css`
  --faction-pos: -450px -90px;
  --faction-c1: 0deg, 100%, 15%;
  --faction-c2: 0deg, 100%, 33%;
  --faction-c3: 0deg, 100%, 38%;
`;

export const factionThemeMap: Map<Faction, string> = new Map([
  [Faction.HAVEN, haven],
  [Faction.ACADEMY, academy],
  [Faction.NECROPOLIS, necropolis],
  [Faction.STRONGHOLD, stronghold],
  [Faction.SYLVAN, sylvan],
  [Faction.DUNGEON, dungeon],
  [Faction.FORTRESS, fortress],
]);
