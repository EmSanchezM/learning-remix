import type { Info } from "./character.model";

export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
    created: Date;
}

export interface LocationResponse {
    info: Info;
    results: Location[];
}
