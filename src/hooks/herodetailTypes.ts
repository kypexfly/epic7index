export interface Stats {
    bra: number;
    int: number;
    fai: number;
    des: number;
}

export interface Upgrade {
}

export interface Relation {
    id: string;
    slot: number;
    description: string;
    relation: string;
    upgrade: Upgrade;
    relation_id: string;
}

export interface Relationship {
    name?: any;
    description?: any;
    relations: Relation[];
}

export interface Grades {
    B: number;
    A: number;
    S: number;
    SS: number;
    SSS: number;
}

export interface SelfDevotion {
    type: string;
    grades: Grades;
}

export interface Grades2 {
    B: number;
    A: number;
    S: number;
    SS: number;
    SSS: number;
}

export interface Slots {
    1: boolean;
    2: boolean;
    3: boolean;
    4: boolean;
}

export interface Devotion {
    type: string;
    grades: Grades2;
    slots: Slots;
}

export interface Type {
    name: string;
    description: string;
}

export interface Assets {
    icon: string;
}

export interface Specialty {
    name: string;
    description: string;
    effect_type: string;
    effect_value: number;
    command: number;
    charm: number;
    politics: number;
    type: Type;
    assets: Assets;
}

export interface Values {
    Criticism: number;
    "Reality Check": number;
    "Heroic Tale": number;
    "Comforting Cheer": number;
    "Cute Cheer": number;
    "Heroic Cheer": number;
    "Sad Memory": number;
    "Joyful Memory": number;
    "Happy Memories": number;
    "Unique Comment": number;
    "Self-Indulgent": number;
    Occult: number;
    Myth: number;
    "Bizarre Story": number;
    "Food Story": number;
    "Horror Story": number;
    Gossip: number;
    Dream: number;
    Advice: number;
    Complain: number;
    Belief: number;
    "Interesting Story": number;
}

export interface Camping {
    personalities: string[];
    topics: string[];
    values: Values;
}

export interface Assets2 {
    thumbnail?: any;
    icon: string;
}

export interface Shop {
    chapter: string;
    continent: string;
    price: number;
    limit_count: number;
    period: string;
}

export interface Cost {
    item: string;
    count: number;
    _id: string;
    identifier: string;
    name: string;
    description: string;
    category: string;
    attribute: string;
    grade: number;
    type1: string;
    type2?: any;
    assets: Assets2;
    request_count: number;
    support_count: number;
    shops: Shop[];
}

export interface Stat {
    stat: string;
    value: number;
    type: string;
}

export interface ZodiacTree {
    name: string;
    description: string;
    skill_enhanced: any;
    costs: Cost[];
    stats: Stat[];
    _id: string;
}

export interface Assets3 {
    icon: string;
    thumbnail?: any;
}

export interface Shop2 {
    chapter: string;
    continent: string;
    price: number;
    limit_count: number;
    period: string;
}

export interface Cost2 {
    item: string;
    count: number;
    _id: string;
    identifier: string;
    name: string;
    description: string;
    assets: Assets3;
    category: string;
    attribute?: any;
    grade?: number;
    type1: string;
    type2?: any;
    request_count?: number;
    support_count?: number;
    shops: Shop2[];
}

export interface Enhancement {
    string: string;
    costs: Cost2[];
    _id: string;
}

export interface Assets4 {
    icon: string;
}

export interface Skill {
    name: string;
    can_enhance: boolean;
    description: string;
    values: number[];
    passive: boolean;
    cooldown: number;
    soul_gain: number;
    pow: number;
    att_rate: number;
    buff: number[];
    debuff: number[];
    common: any[];
    enhanced_description: string;
    enhancements: Enhancement[];
    _id: string;
    assets: Assets4;
    soul_description: string;
    soul_requirement?: number;
    soul_pow?: number;
    soul_att_rate?: number;
}

export interface SpecialtyChange {
}

export interface Assets5 {
    icon: string;
    image: string;
    thumbnail: string;
}

export interface Assets6 {
    icon: string;
}

export interface Buff {
    _id: string;
    id: number;
    type: string;
    name: string;
    effect: string;
    assets: Assets6;
}

export interface Assets7 {
    icon: string;
}

export interface Debuff {
    _id: string;
    id: number;
    type: string;
    name: string;
    effect: string;
    assets: Assets7;
}

export interface Lv50FiveStarNoAwaken {
    cp: number;
    atk: number;
    hp: number;
    spd: number;
    def: number;
    chc: number;
    chd: number;
    dac: number;
    eff: number;
    efr: number;
}

export interface Lv50FiveStarFullyAwakened {
    cp: number;
    atk: number;
    hp: number;
    spd: number;
    def: number;
    chc: number;
    chd: number;
    dac: number;
    eff: number;
    efr: number;
}

export interface Lv60SixStarNoAwaken {
    cp: number;
    atk: number;
    hp: number;
    spd: number;
    def: number;
    chc: number;
    chd: number;
    dac: number;
    eff: number;
    efr: number;
}

export interface Lv60SixStarFullyAwakened {
    cp: number;
    atk: number;
    hp: number;
    spd: number;
    def: number;
    chc: number;
    chd: number;
    dac: number;
    eff: number;
    efr: number;
}

export interface CalculatedStatus {
    lv50FiveStarNoAwaken: Lv50FiveStarNoAwaken;
    lv50FiveStarFullyAwakened: Lv50FiveStarFullyAwakened;
    lv60SixStarNoAwaken: Lv60SixStarNoAwaken;
    lv60SixStarFullyAwakened: Lv60SixStarFullyAwakened;
}

export interface HeroDetail {
    _id: string;
    index: number;
    id: string;
    base_id?: any;
    specialty_id?: any;
    name: string;
    moonlight: boolean;
    rarity: number;
    attribute: string;
    role: string;
    zodiac: string;
    description: string;
    story: string;
    get_line: string;
    stats: Stats;
    relationships: Relationship[];
    self_devotion: SelfDevotion;
    devotion: Devotion;
    specialty: Specialty;
    camping: Camping;
    zodiac_tree: ZodiacTree[];
    skills: Skill[];
    specialty_change: SpecialtyChange;
    assets: Assets5;
    buffs: Buff[];
    debuffs: Debuff[];
    common: any[];
    ex_equip: any[];
    calculatedStatus: CalculatedStatus;
}

export interface Meta {
    requestDate: string;
    apiVersion: string;
}

export interface HeroDetailFetch {
    results: HeroDetail[];
    meta: Meta;
}