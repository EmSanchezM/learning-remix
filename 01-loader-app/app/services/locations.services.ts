import type { LocationResponse } from "~/models/location.model";

export const getAllLocations = async() => {
    const BASE_URL = 'https://rickandmortyapi.com/api/location'
    try {
        const response = await fetch(BASE_URL);
        const locations: LocationResponse = await response.json()

        return locations.results;
    } catch (error) {
        console.warn(error)
    }
}