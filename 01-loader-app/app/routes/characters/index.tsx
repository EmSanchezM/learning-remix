import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction, MetaFunction } from '@remix-run/node'

import type { Character } from '~/models/character.model'
import { getAllCharacters } from '~/services/characters.services'

import CharacterCard from '~/components/Character'
import Navigation from '~/components/Navigation'
import { Routes } from '~/utils/routesHome'

export const meta: MetaFunction = () => ({
    title: "Learning Remix | Characters"
});

export const loader: LoaderFunction = async () => {

    return json(await getAllCharacters())
}

const Characters = () => {
    const characters = useLoaderData<typeof loader>();

    return (
        <>
            <Navigation pathNames={[Routes.HOME, Routes.LOCATIONS, Routes.EPISODES]} />
            <div className='grid-container'>
                {characters.map((character: Character) => {
                    return (<li key={character.id}>
                        <CharacterCard {...character} />
                    </li>)
                })}
            </div>
        </>
    )
}

export default Characters