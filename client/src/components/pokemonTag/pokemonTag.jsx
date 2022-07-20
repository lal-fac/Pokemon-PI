import { Link } from 'react-router-dom';

import TypeTag from "../typeTag/typeTag.jsx";

import './pokemonTag.css';


export default function PokemonTag ({ name, img, pokemonTypes, id, attack }) {
    return (
        <span id="pokemonTag" title={`ID: ${id} attack: ${attack}`}>
            <Link to={`/pokemon/${id}`}>
                <p id="tagName">{name}</p>
            </Link>
            <img id="tagImg" src={img} alt={name}/>
            <ul>
            {pokemonTypes && pokemonTypes.map(t => {
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