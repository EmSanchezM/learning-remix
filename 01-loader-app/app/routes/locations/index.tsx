import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { LoaderFunction, MetaFunction } from '@remix-run/node'

import type { Location } from '~/models/location.model'
import { getAllLocations } from '~/services/locations.services'

import Navigation from '~/components/Navigation'
import LocationCard from '~/components/Location'
import { Routes } from '~/utils/routesHome'

export const meta: MetaFunction = () => ({
    title: "Learning Remix | Locations"
});

export const loader: LoaderFunction = async () => {

    return json(await getAllLocations())
}

const Locations = () => {
    const locations = useLoaderData<typeof loader>();

    return (
        <>
            <Navigation pathNames={[Routes.HOME, Routes.CHARACTERS, Routes.EPISODES]} />
            <div className='grid-container'>
                {locations.map((location: Location) => {
                    return (<li key={location.id}>
                        <LocationCard {...location} />
                    </li>)
                })}
            </div>
        </>
    )
}

export default Locations