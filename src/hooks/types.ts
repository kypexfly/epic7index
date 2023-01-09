export interface Hero {
    id: string;
    _id: string;
    name: string;
    rarity: number;
    attribute: string;
    role: string;
    sex: number;
    zodiac: string;
}

export interface ZodiacTypes {
    crab: string;
    scorpion: string;
    waterbearer: string;
    goat: string;
    twins: string;
    lion: string;
    scales: string;
    maiden: string;
    bull: string;
    fish: string;
    archer: string;
    ram: string;
  }
  
  export interface RoleTypes {
    // "": string;
    // undefined: string;
    warrior: string;
    knight: string;
    ranger: string;
    mage: string;
    assassin: string;
    manauser: string;
  }
  
  export interface AttributeTypes {
    fire: string;
    ice: string;
    wind: string;
    light: string;
    dark: string;
  }