import type { EpisodeResponse } from "~/models/episode.model";

export const getAllEpisodes = async() => {
    const BASE_URL = 'https://rickandmortyapi.com/api/episode'
    try {
        const response = await fetch(BASE_URL);
        const episodes: EpisodeResponse = await response.json()

        return episodes.results;
    } catch (error) {
        console.warn(error)
    }
}