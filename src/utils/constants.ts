/* eslint-disable camelcase */
import { AttributeTypes, RoleArtTypes, RoleTypes, ZodiacTypes } from '../hooks/types';

export const ZODIACS:ZodiacTypes = {
    crab: 'Cancer',
    scorpion: 'Scorpio',
    waterbearer: 'Aquarius',
    goat: 'Capricorn',
    twins: 'Gemini',
    lion: 'Leo',
    scales: 'Libra',
    maiden: 'Virgo',
    bull: 'Taurus',
    fish: 'Pisces',
    archer: 'Sagittarius',
    ram: 'Aries',
  };
  
  export const ROLES:RoleTypes = {
    warrior: 'Warrior',
    knight: 'Knight',
    ranger: 'Ranger',
    mage: 'Mage',
    assassin: 'Thief',
    manauser: 'Soul Weaver',
  };
  export const ROLESART:RoleArtTypes = {
    '': 'Public',
    undefined: 'Public',
    ...ROLES
  };
  
  export const ATTRIBUTES:AttributeTypes = {
    fire: 'Fire',
    ice: 'Ice',
    wind: 'Earth',
    light: 'Light',
    dark: 'Dark',
  };
  
  export const STATNAMES = {
    max_hp_rate: 'Health',
    def_rate: 'Defense',
    acc: 'Effectiveness',
    max_hp: 'Health',
    def: 'Defense',
    att: 'Attack',
    res: 'Effect Resistance',
    att_rate: 'Attack',
    speed: 'Speed',
    cri: 'Crit Chance',
    coop: 'Dual Attack'
  }