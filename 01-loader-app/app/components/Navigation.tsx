import { Link } from "@remix-run/react";
import type { Route } from "~/utils/routesHome";

interface Props {
    pathNames: Route[]
}

const Navigation = ({ pathNames }: Props) => {
  return (
    <nav>
        <ul className="navigation">
            { pathNames.map((pathName) => (
                <li key={`${pathName.path}${pathName.name}`}>
                    <Link to={pathName.path}>{pathName.name}</Link>    
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navigation