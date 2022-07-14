import { Link } from 'react-router-dom';

import TypeTag from "../typeTag/typeTag.jsx";


export default function PokemonTag ({ name, img, types, id, attack }) {
    return (
        <span title={`ID: ${id} attack: ${attack}`}>
            <Link to={`/pokemon/${id}`}>
                <p>{name}</p>
            </Link>
            <img src={img} alt={name}/>
            <ul>
            {types && types.map(t => {
                return(
                    <TypeTag 
                        key={`${t}`}
                        name={t} 
                    />
                );
            })}
            </ul>
        </span>
    )
}