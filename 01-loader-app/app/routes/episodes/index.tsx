import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction, MetaFunction } from '@remix-run/node'

import type { Episode } from '~/models/episode.model'
import { getAllEpisodes } from '~/services/episodes.services'

import Navigation from '~/components/Navigation'
import EpisodeCard from '~/components/Episode'
import { Routes } from '~/utils/routesHome'

export const meta: MetaFunction = () => ({
    title: "Learning Remix | Episodes"
});

export const loader: LoaderFunction = async () => {

    return json(await getAllEpisodes())
}

const Episodes = () => {
    const episodes = useLoaderData<typeof loader>();

    return (
        <>
        <Navigation pathNames={[Routes.HOME, Routes.CHARACTERS, Routes.LOCATIONS]} />
        <div className='grid-container'>
            {episodes.map((episode: Episode) => {
                return (<li key={episode.id}>
                    <EpisodeCard {...episode} />
                </li>)
            })}
        </div>
        </>
    )
}

export default Episodes