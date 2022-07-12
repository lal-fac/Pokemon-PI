import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getPokemonDetail } from "../../redux/actions";
import { TypeTag } from "../typeTag/typeTag";

export default function DetailCard(){

    let dispatch = useDispatch();

    let pokemonId = useParams().id;


    useEffect(() => {
        dispatch(getPokemonDetail(pokemonId)) //missing get name from params
    }, []);

    let pokemon = useSelector(state => state.pokemonDetail);

    return (
        <div>
            <h3>{pokemon.name}</h3>
            <h4>{pokemon.id}</h4>
            <img src={pokemon.bigImg} alt={pokemon.name}/>
            <h4>Stats:</h4>
            <ul>
                {pokemon.stats && pokemon.stats.map(s => {
                    return(
                        <li key={s.stat.name}>
                            {s.stat.name}: {s.base_stat}
                        </li>
                    );
                })}
            </ul>
            <h4>Types:</h4>
            <ul>
            {pokemon.types && pokemon.types.map(t => {
                return(
                    <TypeTag 
                        key={`${pokemon.id}.${t.slot}`}
                        slot={`${pokemon.id}.${t.slot}`}
                        name={t.type.name} 
                    />
                );
            })}
            </ul>
        </div>
    )
};