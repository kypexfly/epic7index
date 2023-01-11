export interface Assets {
    icon: string;
    image: string;
    thumbnail: string;
}

export interface Stats {
    attack: number;
    health: number;
}

export interface Skill {
    description: string;
    enhancements: number[][];
}

export interface ArtifactDetail {
    _id: string;
    identifier: string;
    name: string;
    rarity: number;
    role: string;
    limited: boolean;
    description: string;
    assets: Assets;
    stats: Stats;
    skill: Skill;
}

export interface Meta {
    requestDate: string;
    apiVersion: string;
}

export interface ArtifactDetailFetch {
    results: ArtifactDetail[];
    meta: Meta;
}