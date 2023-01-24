import type { Character } from "~/models/character.model"

const Card = ({ name, image, id} : Pick<Character, 'name' | 'image' | 'id'>) => {
  return (
    <article className="card">
        <img src={image} alt={name} className='img-character' />
        <div>
            <span className="text-center">
                {name} {id}
            </span>
        </div>
    </article>
  )
}

export default Card