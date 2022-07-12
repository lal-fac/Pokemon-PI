import { Link } from 'react-router-dom';

import { TypeTag } from "../typeTag/typeTag.jsx";


export function PokemonTag ({ name, img, types, id }) {
    return (
        <div>
            <Link to={`/pokemon/${id}`}>
                <p>{name}</p>
            </Link>
            <img src={img} alt={name}/>
            <ul>
            {types && types.map(t => {
                return(
                    <TypeTag 
                        key={`${id}.${t.slot}`}
                        slot={`${id}.${t.slot}`}
                        name={t.type.name} 
                    />
                );
            })}
            </ul>
        </div>
    )
}