export const Routes = {
    HOME:{ path: '/', name: 'Home' },
    CHARACTERS: { path: '/characters', name: 'Characters' },
    LOCATIONS: { path: '/locations', name: 'Locations' },
    EPISODES: { path: '/episodes', name: 'Episodes' }
}

export type Route = {
    path: string,
    name: string
}