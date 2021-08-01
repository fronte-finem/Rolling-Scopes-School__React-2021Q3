/**
 *  Data source: https://mightandmagic.fandom.com/wiki/Category:Heroes_VII_creatures
 * */

import {
  AttackType,
  Creature,
  DamageType,
  Faction,
  MoveType,
  Resource,
  Size,
  Tier,
} from './creature-scheme';

export const getCreatures = (): Creature[] => [
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Assassin_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/dungeon/PIC_creature_dungeon_assassin_artwork_small.jpg',
    name: 'Assassin',
    faction: Faction.DUNGEON,
    tier: Tier.CORE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 3,
      },
      defense: 1,
      health: 10,
      damage: {
        type: DamageType.PHYSICAL,
        min: 2,
        max: 3,
      },
      initiative: 24,
      move: {
        type: MoveType.WALKING,
        speed: 5,
      },
      morale: 0,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 45,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Shade_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/dungeon/PIC_creature_dungeon_assassin_upg_artwork_small.jpg',
    name: 'Shade',
    faction: Faction.DUNGEON,
    tier: Tier.CORE,
    upgraded: true,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 3,
      },
      defense: 1,
      health: 11,
      damage: {
        type: DamageType.PHYSICAL,
        min: 2,
        max: 3,
      },
      initiative: 28,
      move: {
        type: MoveType.WALKING,
        speed: 5,
      },
      morale: 0,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 59,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Medusa_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/dungeon/PIC_creature_dungeon_medusa_artwork_small.jpg',
    name: 'Medusa',
    faction: Faction.DUNGEON,
    tier: Tier.ELITE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 4,
      },
      defense: 2,
      health: 34,
      damage: {
        type: DamageType.DARK,
        min: 6,
        max: 9,
      },
      initiative: 28,
      move: {
        type: MoveType.WALKING,
        speed: 4,
      },
      morale: 0,
      destiny: 10,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 400,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Medusa_sorceress',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/dungeon/PIC_creature_dungeon_medusa_upg_artwork_small.jpg',
    name: 'Medusa sorceress',
    faction: Faction.DUNGEON,
    tier: Tier.ELITE,
    upgraded: true,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 6,
      },
      defense: 3,
      health: 39,
      damage: {
        type: DamageType.DARK,
        min: 7,
        max: 10,
      },
      initiative: 33,
      move: {
        type: MoveType.WALKING,
        speed: 5,
      },
      morale: 0,
      destiny: 10,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 520,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Cave_hydra',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/dungeon/PIC_creature_dungeon_cavehydra_artwork_small.jpg',
    name: 'Cave hydra',
    faction: Faction.DUNGEON,
    tier: Tier.CHAMPION,
    upgraded: false,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 30,
      },
      defense: 22,
      health: 500,
      damage: {
        type: DamageType.PHYSICAL,
        min: 64,
        max: 85,
      },
      initiative: 25,
      move: {
        type: MoveType.WALKING,
        speed: 5,
      },
      morale: 0,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 5500,
      },
      {
        resource: Resource.CRYSTAL,
        amount: 1,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Dark_hydra',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/dungeon/PIC_creature_dungeon_cavehydra_upg_artwork_small.jpg',
    name: 'Dark hydra',
    faction: Faction.DUNGEON,
    tier: Tier.CHAMPION,
    upgraded: true,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 35,
      },
      defense: 22,
      health: 530,
      damage: {
        type: DamageType.DARK,
        min: 70,
        max: 90,
      },
      initiative: 25,
      move: {
        type: MoveType.WALKING,
        speed: 5,
      },
      morale: 0,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 7150,
      },
      {
        resource: Resource.CRYSTAL,
        amount: 2,
      },
      {
        resource: Resource.STARSILVER,
        amount: 1,
      },
    ],
  },

  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Gargoyle_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/academy/PIC_creature_academy_gargoyle_artwork_small.jpg',
    name: 'Gargoyle',
    faction: Faction.ACADEMY,
    tier: Tier.CORE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 3,
      },
      defense: 6,
      health: 17,
      damage: {
        type: DamageType.PHYSICAL,
        min: 1,
        max: 2,
      },
      initiative: 11,
      move: {
        type: MoveType.FLYING,
        speed: 4,
      },
      morale: 0,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 50,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Obsidian_gargoyle_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/academy/PIC_creature_academy_gargoyle_upg_artwork_small.jpg',
    name: 'Obsidian gargoyle',
    faction: Faction.ACADEMY,
    tier: Tier.CORE,
    upgraded: true,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 3,
      },
      defense: 6,
      health: 19,
      damage: {
        type: DamageType.PHYSICAL,
        min: 1,
        max: 2,
      },
      initiative: 13,
      move: {
        type: MoveType.FLYING,
        speed: 4,
      },
      morale: 0,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 65,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Djinn_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/academy/PIC_creature_academy_djinn_artwork_small.jpg',
    name: 'Djinn',
    faction: Faction.ACADEMY,
    tier: Tier.ELITE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 5,
      },
      defense: 7,
      health: 60,
      damage: {
        type: DamageType.PRIME,
        min: 10,
        max: 14,
      },
      initiative: 31,
      move: {
        type: MoveType.FLYING,
        speed: 5,
      },
      morale: 0,
      destiny: 15,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 667,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Djinn_channeler',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/academy/PIC_creature_academy_djinn_upg_artwork_small.jpg',
    name: 'Djinn channeler',
    faction: Faction.ACADEMY,
    tier: Tier.ELITE,
    upgraded: true,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 5,
      },
      defense: 7,
      health: 75,
      damage: {
        type: DamageType.PRIME,
        min: 10,
        max: 14,
      },
      initiative: 35,
      move: {
        type: MoveType.FLYING,
        speed: 6,
      },
      morale: 0,
      destiny: 15,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 867,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Arcane_eagle_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/academy/PIC_creature_academy_arcaneeagle_artwork_small.jpg',
    name: 'Arcane eagle',
    faction: Faction.ACADEMY,
    tier: Tier.CHAMPION,
    upgraded: false,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 25,
      },
      defense: 25,
      health: 400,
      damage: {
        type: DamageType.PRIME,
        min: 75,
        max: 80,
      },
      initiative: 36,
      move: {
        type: MoveType.FLYING,
        speed: 7,
      },
      morale: 0,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 5500,
      },
      {
        resource: Resource.STARSILVER,
        amount: 1,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Simurgh',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/academy/PIC_creature_academy_arcaneeagle_upg_artwork_small.jpg',
    name: 'Simurgh',
    faction: Faction.ACADEMY,
    tier: Tier.CHAMPION,
    upgraded: true,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 31,
      },
      defense: 30,
      health: 440,
      damage: {
        type: DamageType.PRIME,
        min: 80,
        max: 100,
      },
      initiative: 39,
      move: {
        type: MoveType.TELEPORTATION,
        speed: 8,
      },
      morale: 0,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 7150,
      },
      {
        resource: Resource.STARSILVER,
        amount: 2,
      },
      {
        resource: Resource.CRYSTAL,
        amount: 1,
      },
    ],
  },

  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Crossbowman_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/haven/PIC_creature_haven_crossbowman_artwork_small.jpg',
    name: 'Crossbowman',
    faction: Faction.HAVEN,
    tier: Tier.CORE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 1,
      },
      defense: 2,
      health: 11,
      damage: {
        type: DamageType.PHYSICAL,
        min: 1,
        max: 3,
      },
      initiative: 11,
      move: {
        type: MoveType.WALKING,
        speed: 3,
      },
      morale: 10,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 45,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Marksman_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/haven/PIC_creature_haven_crossbowman_upg_artwork_small.jpg',
    name: 'Marksman',
    faction: Faction.HAVEN,
    tier: Tier.CORE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 1,
      },
      defense: 2,
      health: 12,
      damage: {
        type: DamageType.PHYSICAL,
        min: 2,
        max: 3,
      },
      initiative: 12,
      move: {
        type: MoveType.WALKING,
        speed: 3,
      },
      morale: 10,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 59,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Chaplain',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/haven/PIC_creature_haven_chaplain_artwork_small.jpg',
    name: 'Chaplain',
    faction: Faction.HAVEN,
    tier: Tier.ELITE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 6,
      },
      defense: 9,
      health: 28,
      damage: {
        type: DamageType.LIGHT,
        min: 6,
        max: 9,
      },
      initiative: 15,
      move: {
        type: MoveType.WALKING,
        speed: 4,
      },
      morale: 15,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 400,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Abbot',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/haven/PIC_creature_haven_chaplain_upg_artwork_small.jpg',
    name: 'Abbot',
    faction: Faction.HAVEN,
    tier: Tier.ELITE,
    upgraded: true,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 6,
      },
      defense: 13,
      health: 35,
      damage: {
        type: DamageType.LIGHT,
        min: 7,
        max: 11,
      },
      initiative: 18,
      move: {
        type: MoveType.WALKING,
        speed: 4,
      },
      morale: 15,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 520,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Seraph_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/haven/PIC_creature_haven_seraph_artwork_small.jpg',
    name: 'Seraph',
    faction: Faction.HAVEN,
    tier: Tier.CHAMPION,
    upgraded: false,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 25,
      },
      defense: 35,
      health: 500,
      damage: {
        type: DamageType.LIGHT,
        min: 60,
        max: 70,
      },
      initiative: 21,
      move: {
        type: MoveType.FLYING,
        speed: 6,
      },
      morale: 10,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 5500,
      },
      {
        resource: Resource.CRYSTAL,
        amount: 1,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Celestial_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/haven/PIC_creature_haven_seraph_upg_artwork_small.jpg',
    name: 'Celestial',
    faction: Faction.HAVEN,
    tier: Tier.CHAMPION,
    upgraded: true,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 25,
      },
      defense: 40,
      health: 600,
      damage: {
        type: DamageType.LIGHT,
        min: 70,
        max: 75,
      },
      initiative: 23,
      move: {
        type: MoveType.FLYING,
        speed: 7,
      },
      morale: 20,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 7150,
      },
      {
        resource: Resource.CRYSTAL,
        amount: 2,
      },
      {
        resource: Resource.DRAGONSTEEL,
        amount: 1,
      },
    ],
  },

  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Ghost_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/necropolis/PIC_creature_necropolis_ghost_artwork_small.jpg',
    name: 'Ghost',
    faction: Faction.NECROPOLIS,
    tier: Tier.CORE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 3,
      },
      defense: 3,
      health: 15,
      damage: {
        type: DamageType.DARK,
        min: 2,
        max: 3,
      },
      initiative: 22,
      move: {
        type: MoveType.FLYING,
        speed: 5,
      },
      morale: 0,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 50,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Banshee_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/necropolis/PIC_creature_necropolis_ghost_upg_artwork_small.jpg',
    name: 'Banshee',
    faction: Faction.NECROPOLIS,
    tier: Tier.CORE,
    upgraded: true,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 3,
      },
      defense: 5,
      health: 15,
      damage: {
        type: DamageType.DARK,
        min: 2,
        max: 4,
      },
      initiative: 28,
      move: {
        type: MoveType.FLYING,
        speed: 6,
      },
      morale: 0,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 65,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Lich_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/necropolis/PIC_creature_necropolis_lich_artwork_small.jpg',
    name: 'Lich',
    faction: Faction.NECROPOLIS,
    tier: Tier.ELITE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 7,
      },
      defense: 7,
      health: 36,
      damage: {
        type: DamageType.DARK,
        min: 8,
        max: 11,
      },
      initiative: 14,
      move: {
        type: MoveType.WALKING,
        speed: 3,
      },
      morale: 0,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 280,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Archlich_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/necropolis/PIC_creature_necropolis_lich_upg_artwork_small.jpg',
    name: 'Archlich',
    faction: Faction.NECROPOLIS,
    tier: Tier.ELITE,
    upgraded: true,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 7,
      },
      defense: 8,
      health: 41,
      damage: {
        type: DamageType.DARK,
        min: 9,
        max: 12,
      },
      initiative: 16,
      move: {
        type: MoveType.WALKING,
        speed: 3,
      },
      morale: 0,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 370,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Grim_rider',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/necropolis/PIC_creature_necropolis_grimrider_artwork_small.jpg',
    name: 'Grim rider',
    faction: Faction.NECROPOLIS,
    tier: Tier.CHAMPION,
    upgraded: false,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 45,
      },
      defense: 20,
      health: 300,
      damage: {
        type: DamageType.PHYSICAL,
        min: 85,
        max: 95,
      },
      initiative: 18,
      move: {
        type: MoveType.WALKING,
        speed: 7,
      },
      morale: 0,
      destiny: 10,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 5500,
      },
      {
        resource: Resource.SHADOWSTEEL,
        amount: 1,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Grim_reaper_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/necropolis/PIC_creature_necropolis_grimrider_upg_artwork_small.jpg',
    name: 'Grim reaper',
    faction: Faction.NECROPOLIS,
    tier: Tier.CHAMPION,
    upgraded: true,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 50,
      },
      defense: 20,
      health: 350,
      damage: {
        type: DamageType.PHYSICAL,
        min: 100,
        max: 110,
      },
      initiative: 19,
      move: {
        type: MoveType.WALKING,
        speed: 7,
      },
      morale: 0,
      destiny: 25,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 7150,
      },
      {
        resource: Resource.SHADOWSTEEL,
        amount: 2,
      },
      {
        resource: Resource.STARSILVER,
        amount: 1,
      },
    ],
  },

  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Harpy_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/stronghold/PIC_creature_stronghold_harpy_artwork_small.jpg',
    name: 'Harpy',
    faction: Faction.STRONGHOLD,
    tier: Tier.CORE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 1,
      },
      defense: 0,
      health: 12,
      damage: {
        type: DamageType.PHYSICAL,
        min: 2,
        max: 3,
      },
      initiative: 25,
      move: {
        type: MoveType.FLYING,
        speed: 6,
      },
      morale: 0,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 45,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Fury_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/stronghold/PIC_creature_stronghold_harpy_upg_artwork_small.jpg',
    name: 'Fury',
    faction: Faction.STRONGHOLD,
    tier: Tier.CORE,
    upgraded: true,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 1,
      },
      defense: 0,
      health: 13,
      damage: {
        type: DamageType.PHYSICAL,
        min: 2,
        max: 3,
      },
      initiative: 30,
      move: {
        type: MoveType.FLYING,
        speed: 6,
      },
      morale: 0,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 59,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Centaur_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/stronghold/PIC_creature_stronghold_centaur_artwork_small.jpg',
    name: 'Centaur',
    faction: Faction.STRONGHOLD,
    tier: Tier.ELITE,
    upgraded: false,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 9,
      },
      defense: 3,
      health: 28,
      damage: {
        type: DamageType.PHYSICAL,
        min: 5,
        max: 8,
      },
      initiative: 21,
      move: {
        type: MoveType.WALKING,
        speed: 4,
      },
      morale: 0,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 215,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Centaur_marauder_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/stronghold/PIC_creature_stronghold_centaur_upg_artwork_small.jpg',
    name: 'Centaur marauder',
    faction: Faction.STRONGHOLD,
    tier: Tier.ELITE,
    upgraded: true,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 9,
      },
      defense: 5,
      health: 34,
      damage: {
        type: DamageType.PHYSICAL,
        min: 6,
        max: 10,
      },
      initiative: 26,
      move: {
        type: MoveType.WALKING,
        speed: 5,
      },
      morale: 0,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 280,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Behemoth_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/stronghold/PIC_creature_stronghold_behemoth_artwork_small.jpg',
    name: 'Behemoth',
    faction: Faction.STRONGHOLD,
    tier: Tier.CHAMPION,
    upgraded: false,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 32,
      },
      defense: 25,
      health: 420,
      damage: {
        type: DamageType.PHYSICAL,
        min: 70,
        max: 85,
      },
      initiative: 22,
      move: {
        type: MoveType.WALKING,
        speed: 5,
      },
      morale: 0,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 4670,
      },
      {
        resource: Resource.DRAGONSTEEL,
        amount: 1,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Ancient_behemoth_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/stronghold/PIC_creature_stronghold_behemoth_upg_artwork_small.jpg',
    name: 'Ancient behemoth',
    faction: Faction.STRONGHOLD,
    tier: Tier.CHAMPION,
    upgraded: true,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 35,
      },
      defense: 25,
      health: 450,
      damage: {
        type: DamageType.PHYSICAL,
        min: 80,
        max: 100,
      },
      initiative: 23,
      move: {
        type: MoveType.WALKING,
        speed: 6,
      },
      morale: 0,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 6070,
      },
      {
        resource: Resource.DRAGONSTEEL,
        amount: 2,
      },
      {
        resource: Resource.SHADOWSTEEL,
        amount: 1,
      },
    ],
  },

  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Pixie_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/sylvan/PIC_creature_sylvan_pixie_artwork_small.jpg',
    name: 'Pixie',
    faction: Faction.SYLVAN,
    tier: Tier.CORE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 5,
      },
      defense: 1,
      health: 11,
      damage: {
        type: DamageType.PHYSICAL,
        min: 2,
        max: 2,
      },
      initiative: 35,
      move: {
        type: MoveType.FLYING,
        speed: 5,
      },
      morale: 5,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 48,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Sprite_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/sylvan/PIC_creature_sylvan_pixie_upg_artwork_small.jpg',
    name: 'Sprite',
    faction: Faction.SYLVAN,
    tier: Tier.CORE,
    upgraded: true,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.MELEE,
        strength: 5,
      },
      defense: 1,
      health: 12,
      damage: {
        type: DamageType.PHYSICAL,
        min: 2,
        max: 3,
      },
      initiative: 38,
      move: {
        type: MoveType.FLYING,
        speed: 6,
      },
      morale: 5,
      destiny: 5,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 62,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Druid_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/sylvan/PIC_creature_sylvan_druid_artwork_small.jpg',
    name: 'Druid',
    faction: Faction.SYLVAN,
    tier: Tier.ELITE,
    upgraded: false,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 6,
      },
      defense: 6,
      health: 27,
      damage: {
        type: DamageType.EARTH,
        min: 5,
        max: 8,
      },
      initiative: 23,
      move: {
        type: MoveType.WALKING,
        speed: 4,
      },
      morale: 5,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 250,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Druid_elder_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/sylvan/PIC_creature_sylvan_druid_upg_artwork_small.jpg',
    name: 'Druid elder',
    faction: Faction.SYLVAN,
    tier: Tier.ELITE,
    upgraded: true,
    size: Size.SMALL,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 7,
      },
      defense: 7,
      health: 32,
      damage: {
        type: DamageType.EARTH,
        min: 6,
        max: 9,
      },
      initiative: 25,
      move: {
        type: MoveType.WALKING,
        speed: 4,
      },
      morale: 5,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 320,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Treant_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/sylvan/PIC_creature_sylvan_treant_artwork_small.jpg',
    name: 'Treant',
    faction: Faction.SYLVAN,
    tier: Tier.CHAMPION,
    upgraded: false,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 22,
      },
      defense: 35,
      health: 400,
      damage: {
        type: DamageType.EARTH,
        min: 50,
        max: 70,
      },
      initiative: 12,
      move: {
        type: MoveType.WALKING,
        speed: 3,
      },
      morale: 5,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 4670,
      },
      {
        resource: Resource.STARSILVER,
        amount: 1,
      },
    ],
  },
  {
    wikiUrl: 'https://mightandmagic.fandom.com/wiki/Ancient_treant_(H7)',
    imageUrl:
      'https://ubistatic-a.akamaihd.net/0004/prod/images/units/sylvan/PIC_creature_sylvan_treant_upg_artwork_small.jpg',
    name: 'Ancient treant',
    faction: Faction.SYLVAN,
    tier: Tier.CHAMPION,
    upgraded: true,
    size: Size.LARGE,
    stats: {
      attack: {
        type: AttackType.RANGED,
        strength: 24,
      },
      defense: 42,
      health: 460,
      damage: {
        type: DamageType.EARTH,
        min: 68,
        max: 90,
      },
      initiative: 15,
      move: {
        type: MoveType.WALKING,
        speed: 3,
      },
      morale: 5,
      destiny: 0,
    },
    cost: [
      {
        resource: Resource.GOLD,
        amount: 6070,
      },
      {
        resource: Resource.STARSILVER,
        amount: 2,
      },
      {
        resource: Resource.CRYSTAL,
        amount: 1,
      },
    ],
  },
];
