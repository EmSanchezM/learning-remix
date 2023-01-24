import type { CharacterResponse } from "~/models/character.model";

export const getAllCharacters = async() => {
    const BASE_URL = 'https://rickandmortyapi.com/api/character'
    try {
        const response = await fetch(BASE_URL);
        const characters: CharacterResponse = await response.json()

        return characters.results;
    } catch (error) {
        console.warn(error)
    }
}