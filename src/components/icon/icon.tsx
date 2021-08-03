import React from 'react';
import { css } from '@linaria/core';
import iconSprite from '@assets/sprites/icons.svg';

const icon = css`
  display: block;
  width: 100%;
  height: 100%;
`;

interface Props {
  src?: string;
  prefix?: string;
  name: string;
  fill?: string;
}

export const Icon: React.FC<Props> = ({
  src = iconSprite,
  prefix = 'icon-',
  name,
  fill,
}) => {
  return (
    <svg className={icon} style={{ fill }}>
      <use href={`${src}#${prefix}${name}`} />
    </svg>
  );
};

export enum IconName {
  TARGET_ARCHERY = 'target-archery',
  TARGET_ARROWS = 'target-arrows',
  SWORD_CLASH = 'sword-clash',
  WALKING_BOOT = 'walking-boot',
  WALKING_FOOT = 'walking-foot',
  FOOTPRINT = 'footprint',
  FLUFFY_WING = 'fluffy-wing',
  CURLY_WING = 'curly-wing',
  FLUFFY_SWIRL = 'fluffy-swirl',
  FLUFFY_TREFOIL = 'fluffy-trefoil',
  PORTAL = 'portal',
  GLASS_HEART = 'glass-heart',
  HEART_DROP = 'heart-drop',
  LAYERED_ARMOR = 'layered-armor',
  BORDERED_SHIELD = 'bordered-shield',
  EAGLE_EMBLEM = 'eagle-emblem',
  HOLY_GRAIL = 'holy-grail',
  SANDS_OF_TIME = 'sands-of-time',
  CLOVER = 'clover',
  CASH = 'cash',
  GEMS = 'gems',
  SAPHIR = 'saphir',
  METAL_BAR = 'metal-bar',
  BLACK_BAR = 'black-bar',
  ICE_CUBE = 'ice-cube',
  MUSCLE_UP = 'muscle-up',
  TRIPLE_YIN = 'triple-yin',
  MOEBIUS_STAR = 'moebius-star',
  UBISOFT_SUN = 'ubisoft-sun',
  SUNRISE = 'sunrise',
  SUN = 'sun',
  MOON = 'moon',
  NIGHT_SKY = 'night-sky',
  SMALL_FIRE = 'small-fire',
  BIG_WAVE = 'big-wave',
  SPLURT = 'splurt',
  DROPLETS = 'droplets',
  LIGHT_THORNY_TRISKELION = 'light-thorny-triskelion',
  EARTH_SPIT = 'earth-spit',
  TORNADO = 'tornado',
  TWISTER = 'twister',
  SPECTRE = 'spectre',
  MAGNIFYING_GLASS = 'magnifying-glass',
}
