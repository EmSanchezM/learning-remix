import type { Episode } from "~/models/episode.model"

const EpisodeCard = ({ name, episode, air_date } : Pick<Episode, 'name' | 'episode' | 'air_date'>) => {
  return (
    <article className="card">
        <div>
            <span className="text-center">
                {name} - {episode}
            </span>
            <footer>{air_date}</footer>
        </div>
    </article>
  )
}

export default EpisodeCard