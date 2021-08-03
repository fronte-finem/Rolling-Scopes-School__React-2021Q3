import { css, cx } from '@linaria/core';
import React from 'react';
import { Icon, IconName } from 'components/icon/icon';
import {
  AttackType,
  Creature,
  DamageType,
  MoveType,
} from 'services/data/creature-scheme';

const statContainer = css`
  height: 2.5em;
  display: flex;
  gap: 0.5em;
  align-items: center;
  background-color: #0004;
  border-radius: 5em;
  cursor: default;
`;

const reverseStat = css`
  flex-direction: row-reverse;
`;

const iconContainer = css`
  width: 2.5em;
  height: 2.5em;
  padding: 0.3em;
  background-color: #0004;
  border-radius: 50%;
  svg {
    fill: #fff;
  }
`;

const textContainer = css`
  font-family: var(--ff-main);
  font-size: 1em;
  color: #fff;
`;

const damageTypeIconMap: Map<DamageType, IconName> = new Map([
  [DamageType.PHYSICAL, IconName.MUSCLE_UP],
  [DamageType.LIGHT, IconName.SUN],
  [DamageType.DARK, IconName.MOON],
  [DamageType.PRIME, IconName.MOEBIUS_STAR],
  [DamageType.AIR, IconName.TORNADO],
  [DamageType.FIRE, IconName.SMALL_FIRE],
  [DamageType.WATER, IconName.SPLURT],
  [DamageType.EARTH, IconName.LIGHT_THORNY_TRISKELION],
]);

const moveTypeIconMap: Map<MoveType, IconName> = new Map([
  [MoveType.WALKING, IconName.FOOTPRINT],
  [MoveType.FLYING, IconName.FLUFFY_WING],
  [MoveType.TELEPORTATION, IconName.PORTAL],
]);

interface StatProps {
  name: string;
  value: string;
  description?: string;
  reverse?: boolean;
}

export const StatView: React.FC<StatProps> = ({
  name,
  value,
  description,
  reverse,
}) => {
  return (
    <div
      className={cx(statContainer, reverse && reverseStat)}
      title={description}>
      <div className={iconContainer}>
        <Icon name={name} />
      </div>
      <div className={textContainer}>{value}</div>
    </div>
  );
};

type Convert = (creature: Creature) => StatProps;

export class ConvertStats {
  public static Attack: Convert = (creature) => ({
    name:
      creature.stats.attack.type === AttackType.MELEE
        ? IconName.SWORD_CLASH
        : IconName.TARGET_ARROWS,
    value: creature.stats.attack.strength.toString(),
    description: `${creature.stats.attack.type} attack`,
  });

  public static Defense: Convert = (creature) => ({
    name: IconName.BORDERED_SHIELD,
    value: creature.stats.defense.toString(),
    description: 'Defense',
  });

  public static Health: Convert = (creature) => ({
    name: IconName.GLASS_HEART,
    value: creature.stats.health.toString(),
    description: 'Health',
  });

  public static Damage: Convert = (creature) => ({
    name:
      damageTypeIconMap.get(creature.stats.damage.type) || IconName.MUSCLE_UP,
    value: `${creature.stats.damage.min} ~ ${creature.stats.damage.max}`,
    description: `${creature.stats.damage.type} damage`,
  });

  public static Initiative: Convert = (creature) => ({
    name: IconName.SANDS_OF_TIME,
    value: creature.stats.initiative.toString(),
    description: 'Initiative',
  });

  public static Morale: Convert = (creature) => ({
    name: IconName.EAGLE_EMBLEM,
    value: creature.stats.morale.toString(),
    description: 'Morale',
  });

  public static Destiny: Convert = (creature) => ({
    name: IconName.CLOVER,
    value: creature.stats.destiny.toString(),
    description: 'Destiny',
  });

  public static Move: Convert = (creature) => ({
    name: moveTypeIconMap.get(creature.stats.move.type) || IconName.FOOTPRINT,
    value: creature.stats.move.speed.toString(),
    description: `${creature.stats.move.type} speed`,
  });
}
