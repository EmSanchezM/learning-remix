import type { Info } from "./character.model";

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: Date;
}

export interface EpisodeResponse {
    info: Info;
    results: Episode[];
}
