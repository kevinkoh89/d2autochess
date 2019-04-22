const CHESS_LIST = [
  {
    chesskey: 'anti_mage',
    name: 'antimage',
    species: 'elf',
    class: 'demonhunter',
    cost: 1
  },
  { chesskey: 'axe', name: 'axe', species: 'orc', class: 'warrior', cost: 1 },
  {
    chesskey: 'batrider',
    name: 'bat rider',
    species: 'troll',
    class: 'knight',
    cost: 1
  },
  {
    chesskey: 'bounty_hunter',
    name: 'bounty hunter',
    species: 'goblin',
    class: 'assassin',
    cost: 1
  },
  {
    chesskey: 'clockwerk',
    name: 'clockwerk',
    species: 'goblin',
    class: 'mech',
    cost: 1
  },
  {
    chesskey: 'drow_ranger',
    name: 'drow ranger',
    species: 'undead',
    class: 'hunter',
    cost: 1
  },
  {
    chesskey: 'enchantress',
    name: 'enchantress',
    species: 'beast',
    class: 'druid',
    cost: 1
  },
  { chesskey: 'orge', name: 'orge', species: 'orge', class: 'mage', cost: 1 },
  {
    chesskey: 'shadow_shaman',
    name: 'shadow shaman',
    species: 'troll',
    class: 'shaman',
    cost: 1
  },
  {
    chesskey: 'tiny',
    name: 'tiny',
    species: 'elemental',
    class: 'warrior',
    cost: 1
  },
  {
    chesskey: 'beastmaster',
    name: 'beastmaster',
    species: 'orc',
    class: 'hunter',
    cost: 2
  },
  {
    chesskey: 'juggernaut',
    name: 'juggernaut',
    species: 'orc',
    class: 'warrior',
    cost: 2
  },
  {
    chesskey: 'chaos_knight',
    name: 'chaosknight',
    species: 'demon',
    class: 'knight',
    cost: 2
  },
  {
    chesskey: 'crystal_maiden',
    name: 'crystal maiden',
    species: 'human',
    class: 'mage',
    cost: 2
  },
  {
    chesskey: 'puck',
    name: 'puck',
    species: 'elf dragon',
    class: 'mage',
    cost: 2
  },
  { chesskey: 'luna', name: 'luna', species: 'elf', class: 'knight', cost: 2 },
  {
    chesskey: 'sladar',
    name: 'sladar',
    species: 'mage',
    class: 'warrior',
    cost: 2
  },
  {
    chesskey: 'timbersaw',
    name: 'timbersaw',
    species: 'goblin',
    class: 'mech',
    cost: 2
  },
  {
    chesskey: 'treant',
    name: 'treant',
    species: 'elf',
    class: 'druid',
    cost: 2
  },
  {
    chesskey: 'witch_doctor',
    name: 'witch doctor',
    species: 'troll',
    class: 'warlock',
    cost: 2
  },
  {
    chesskey: 'pain_queen',
    name: 'pain queen',
    species: 'demon',
    class: 'assassin',
    cost: 2
  },
  {
    chesskey: 'prophet',
    name: 'prophet',
    species: 'elf',
    class: 'druid',
    cost: 2
  },
  {
    chesskey: 'morphling',
    name: 'morphling',
    species: 'elemental',
    class: 'assassin',
    cost: 2
  },
  {
    chesskey: 'omniknight',
    name: 'omniknight',
    species: 'human',
    class: 'knight',
    cost: 3
  },
  { chesskey: 'lina', name: 'lina', species: 'human', class: 'mage', cost: 3 },
  {
    chesskey: 'phantom_assassin',
    name: 'phantom assassin',
    species: 'elf',
    class: 'assassin',
    cost: 3
  },
  {
    chesskey: 'razor',
    name: 'razor',
    species: 'elemental',
    class: 'mage',
    cost: 3
  },
  {
    chesskey: 'sand_king',
    name: 'sand king',
    species: 'beast',
    class: 'assassin',
    cost: 3
  },
  {
    chesskey: 'shadow_fiend',
    name: 'shadow fiend',
    species: 'demon',
    class: 'warlock',
    cost: 3
  },
  {
    chesskey: 'slark',
    name: 'slark',
    species: 'naga',
    class: 'assassin',
    cost: 3
  },
  {
    chesskey: 'sniper',
    name: 'sniper',
    species: 'dwarf',
    class: 'mech',
    cost: 3
  },
  {
    chesskey: 'venomancer',
    name: 'venomancer',
    species: 'beast',
    class: 'warlock',
    cost: 3
  },
  {
    chesskey: 'viper',
    name: 'viper',
    species: 'dragon',
    class: 'assassin',
    cost: 3
  },
  {
    chesskey: 'windranger',
    name: 'windranger',
    species: 'elf',
    class: 'hunter',
    cost: 3
  },
  {
    chesskey: 'lycan',
    name: 'lycan',
    species: 'human beast',
    class: 'warrior',
    cost: 3
  },
  {
    chesskey: 'kunkka',
    name: 'kunkka',
    species: 'human',
    class: 'warrior',
    cost: 4
  },
  {
    chesskey: 'doom',
    name: 'doom',
    species: 'demon',
    class: 'warrior',
    cost: 4
  },
  {
    chesskey: 'dragon_knight',
    name: 'dragon knight',
    species: 'human dragon',
    class: 'knight',
    cost: 4
  },
  {
    chesskey: 'lightkeeper',
    name: 'lightkeeper',
    species: 'human',
    class: 'mage',
    cost: 4
  },
  {
    chesskey: 'lone_druid',
    name: 'lone druid',
    species: 'beast',
    class: 'druid',
    cost: 4
  },
  {
    chesskey: 'tenplar_assassin',
    name: 'tenplar assassin',
    species: 'elf',
    class: 'assassin',
    cost: 4
  },
  {
    chesskey: 'medusa',
    name: 'medusa',
    species: 'naga',
    class: 'hunter',
    cost: 4
  },
  {
    chesskey: 'necrophos',
    name: 'necrophos',
    species: 'undead',
    class: 'warlock',
    cost: 4
  },
  {
    chesskey: 'troll',
    name: 'troll',
    species: 'troll',
    class: 'warrior',
    cost: 4
  },
  {
    chesskey: 'tusk',
    name: 'tusk',
    species: 'beast',
    class: 'warrior',
    cost: 4
  },
  {
    chesskey: 'techies',
    name: 'techies',
    species: 'goblin',
    class: 'mech',
    cost: 5
  },
  {
    chesskey: 'disruptor',
    name: 'disruptor',
    species: 'orc',
    class: 'shaman',
    cost: 5
  },
  {
    chesskey: 'alchemist',
    name: 'alchemist',
    species: 'goblin',
    class: 'warlock',
    cost: 5
  },
  {
    chesskey: 'enigma',
    name: 'enigma',
    species: 'elemental',
    class: 'warlock',
    cost: 5
  },
  {
    chesskey: 'gyrocopter',
    name: 'gyrocopter',
    species: 'goblin',
    class: 'mech',
    cost: 5
  },
  { chesskey: 'lich', name: 'lich', species: 'undead', class: 'mage', cost: 5 }
]

const COLOR_MAP = {
  //   species
  beast: '',
  demon: '',
  dwarf: '',
  dragon: '',
  element: '',
  elf: 'red',
  goblin: '',
  human: '#fff',
  naga: '',
  orge: '',
  orc: '#fee',
  troll: '',
  undead: '#f7f7f7',
  //   classes
  assasin: '',
  demonhunter: '',
  druid: '',
  hunter: '',
  knight: '',
  mage: '',
  mech: '',
  shaman: '',
  warlock: '',
  warrior: '',
  //   type
  common: '#fff',
  uncommon: '',
  rare: '',
  epic: '',
  legendary: ''
}

const SYNERGY_MAP = noOfPieces => ({
  beast: () => {
    if (noOfPieces >= 2 && noOfPieces < 4) {
      return `Beast(${noOfPieces}): All allies +10% attack damage`
    } else if (noOfPieces >= 4 && noOfPieces < 6) {
      return `Beast(${noOfPieces}): All allies +15% attack damage`
    } else if (noOfPieces >= 6) {
      return `Beast(${noOfPieces}): All allies +20% attack damage`
    }
    return false
  },
  demon: () => {
    if (noOfPieces === 1) {
      return `Demon(${noOfPieces}): Demon +50% attack damage`
    }
    return false
  },
  dwarf: () => {
    if (noOfPieces >= 2) {
      return `Dwarf(${noOfPieces}): Attack range +300`
    }
    return false
  },
  dragon: () => {
    if (noOfPieces === 3) {
      return `Dragon(${noOfPieces}): All friendly dragon have 100 mana when battle start`
    }
    return false
  },
  elemental: () => {
    if (noOfPieces >= 2 && noOfPieces < 4) {
      return `Elemental(${noOfPieces}): All friendly elemental has 20% chance to stun enemy when attacked by melee hero`
    } else if (noOfPieces >= 4) {
      return `Elemental(${noOfPieces}): 30% chance to turn attacker into stone for 3s when attacked by melee chesses`
    }
    return false
  },
  elf: () => {
    if (noOfPieces >= 2) {
      return `Elf(${noOfPieces}): All friendly elves +20% evasion`
    }
    return false
  },
  goblin: () => {
    if (noOfPieces >= 6) {
      return `Goblin(${noOfPieces}): All friendly goblin +15 armour and hp regen`
    } else if (noOfPieces >= 3 && noOfPieces < 6) {
      return `Goblin(${noOfPieces}): Random ally +15 armour and hp regen`
    }
    return false
  },
  human: () => {
    if (noOfPieces >= 2 && noOfPieces < 4) {
      return `Human(${noOfPieces}): All friendly human +20% chance to disarm target on damage deal`
    } else if (noOfPieces >= 4 && noOfPieces < 6) {
      return `Human(${noOfPieces}): All friendly human +25% chance to disarm target on damage deal`
    } else if (noOfPieces >= 6) {
      return `Human(${noOfPieces}): All friendly human +30% chance to disarm target on damage deal`
    }
    return false
  },
  naga: () => {
    if (noOfPieces >= 2 && noOfPieces < 4) {
      return `Naga(${noOfPieces}): All allies +20 magic resistance`
    } else if (noOfPieces >= 4) {
      return `Naga(${noOfPieces}): All allies +40 magic resistance`
    }
    return false
  },
  orge: () => {
    return `Orge(${noOfPieces}): Max hp +10%`
  },
  orc: () => {
    if (noOfPieces >= 2 && noOfPieces < 4) {
      return `Orc(${noOfPieces}): All friendly orc +250 max hp`
    } else if (noOfPieces >= 4) {
      return `Orc(${noOfPieces}): All friendly orc +350 max hp`
    }
    return false
  },
  troll: () => {
    if (noOfPieces >= 2 && noOfPieces < 4) {
      return `Troll(${noOfPieces}): All friendly orc +250 max hp`
    } else if (noOfPieces >= 4) {
      return `Troll(${noOfPieces}): All friendly orc +350 max hp`
    }
    return false
  },
  undead: () => {
    if (noOfPieces >= 2 && noOfPieces < 4) {
      return `Undead(${noOfPieces}): All enemies -5 armour`
    } else if (noOfPieces >= 4) {
      return `Undead(${noOfPieces}): All enemies -7 armour`
    }
    return false
  },
  assassin: () => {
    if (noOfPieces >= 6) {
      return `Assassin(${noOfPieces}): All friendly assassin +20% chance to deal 4X damage`
    } else if (noOfPieces >= 3 && noOfPieces < 6) {
      return `Assassin(${noOfPieces}): All friendly assassin +10% chance to deal 4X damage`
    }
    return false
  },
  demonhunter: () => {
    if (noOfPieces === 1) {
      return `Demon Hunter(${noOfPieces}): consider as enemy demon`
    } else if (noOfPieces > 1) {
      return `Demon Hunter(${noOfPieces}): consider as enemy demon`
    }
    return false
  },
  druid: () => {
    return ''
  },
  hunter: () => {
    if (noOfPieces >= 6) {
      return `Hunter(${noOfPieces}): All friendly hunter +35% damage`
    } else if (noOfPieces >= 3 && noOfPieces < 6) {
      return `Hunter(${noOfPieces}): All friendly hunter +25% damage`
    }
    return false
  },
  knight: () => {
    if (noOfPieces >= 2 && noOfPieces < 4) {
      return `Knight(${noOfPieces}): All friendly knight +25% chance to get a shield`
    } else if (noOfPieces >= 4 && noOfPieces < 6) {
      return `Knight(${noOfPieces}): All friendly knight +35% chance to get a shield`
    } else if (noOfPieces >= 6) {
      return `Knight(${noOfPieces}): All friendly knight +45% chance to get a shield`
    }
    return false
  },
  mage: () => {
    if (noOfPieces >= 6) {
      return `Mage(${noOfPieces}): All enemies -60 magic resistance`
    } else if (noOfPieces >= 3 && noOfPieces < 6) {
      return `Mage(${noOfPieces}): All enemies -30 magic resistance`
    }
    return false
  },
  mech: () => {
    if (noOfPieces >= 2 && noOfPieces < 4) {
      return `Mech(${noOfPieces}): All friendly mech +15 hp regen`
    } else if (noOfPieces >= 4) {
      return `Mech(${noOfPieces}): All friendly mech +25 hp regen`
    }
    return false
  },
  shaman: () => {
    if (noOfPieces >= 2) {
      return `Shaman(${noOfPieces}): Hex an enemy when battle start`
    }
    return false
  },
  warlock: () => {
    if (noOfPieces >= 6) {
      return `Warlock(${noOfPieces}): All allies +30% lifesteal`
    } else if (noOfPieces >= 3 && noOfPieces < 6) {
      return `Warlock(${noOfPieces}): All allies +20% lifesteal`
    }
    return false
  },
  warrior: () => {
    if (noOfPieces >= 6) {
      return `Warrior(${noOfPieces}): All friendly warrior +10 armour`
    } else if (noOfPieces >= 3 && noOfPieces < 6) {
      return `Warrior(${noOfPieces}): All friendly warrior +8 armour`
    }
    return false
  }
})

const Const = { COLOR_MAP, SYNERGY_MAP, CHESS_LIST }

export default Const
