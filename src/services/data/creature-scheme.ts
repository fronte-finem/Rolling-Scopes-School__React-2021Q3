export enum Faction {
  HAVEN = 'Haven',
  ACADEMY = 'Academy',
  NECROPOLIS = 'Necropolis',
  STRONGHOLD = 'Stronghold',
  SYLVAN = 'Sylvan',
  DUNGEON = 'Dungeon',
  FORTRESS = 'Fortress',
  NEUTRAL = 'Neutral',
}

export enum Tier {
  CORE = 'Core',
  ELITE = 'Elite',
  CHAMPION = 'Champion',
}

export enum Size {
  SMALL = 'Small',
  LARGE = 'Large',
}

export enum AttackType {
  MELEE = 'Melee',
  RANGED = 'Ranged',
}

export enum MoveType {
  WALKING = 'Walking',
  FLYING = 'Flying',
  TELEPORTATION = 'Teleportation',
}

export enum RangeStrength {
  FULL = 'Full',
  HALF = 'Half',
}

interface Attack {
  type: AttackType;
  strength: number;
}

export enum DamageType {
  PHYSICAL = 'Physical',
  LIGHT = 'Light',
  DARK = 'Dark',
  PRIME = 'Prime',
  AIR = 'Air',
  FIRE = 'Fire',
  WATER = 'Water',
  EARTH = 'Earth',
}
export interface Damage {
  type: DamageType;
  min: number;
  max: number;
}

export interface Move {
  type: MoveType;
  speed: number;
}

export interface Stats {
  attack: Attack;
  defense: number;
  health: number;
  damage: Damage;
  initiative: number;
  move: Move;
  morale: number;
  destiny: number;
}

export enum Resource {
  GOLD = 'Gold',
  CRYSTAL = 'Crystal',
  STARSILVER = 'Starsilver',
  SHADOWSTEEL = 'Shadowsteel',
  DRAGONSTEEL = 'Dragonsteel',
}

export interface Cost {
  resource: Resource;
  amount: number;
}

export interface Creature {
  wikiUrl: string;
  imageUrl: string;
  name: string;
  faction: Faction;
  tier: Tier;
  upgraded: boolean;
  size: Size;
  stats: Stats;
  cost: Cost[];
}
