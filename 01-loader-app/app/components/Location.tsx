import type { Location } from "~/models/location.model"

const LocationCard = ({ name, type } : Pick<Location, 'name' | 'type'>) => {
  return (
    <article className="card">
        <div>
            <span className="text-center">
                {name} - {type}
            </span>
        </div>
    </article>
  )
}

export default LocationCard