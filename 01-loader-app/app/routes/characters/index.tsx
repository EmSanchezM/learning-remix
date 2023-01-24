import { json } from '@remix-run/node'
import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { getAllCharacters } from '~/services/characters.services'
import Card from '~/components/Card'
import type { Character } from '~/models/character.model'
import Navigation from '~/components/Navigation'
import { Routes } from '~/utils/routesHome'

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
                    <Card {...character} />
                </li>)
            })}
        </div>
        </>
    )
}

export default Characters