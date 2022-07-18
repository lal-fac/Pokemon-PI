import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { cleanPokemonDetail, getPokemonDetail } from "../../redux/actions";
import TypeTag from "../typeTag/typeTag";

export default function DetailCard(){

    let dispatch = useDispatch();

    let pokemonId = useParams().id;


    useEffect(() => {
        dispatch(getPokemonDetail(pokemonId));
        dispatch(cleanPokemonDetail());
    }, [dispatch, pokemonId]);

    let pokemon = useSelector(state => state.pokemonDetail);
    
    return (
        <div>
            <h3>{pokemon.name}</h3>
            <h4>{pokemon.id}</h4>
            {pokemon.bigImg ? <img src={pokemon.bigImg} alt={pokemon.name}/> : null}
            <h4>Stats:</h4>
            <ul>
                <li>Health points: {pokemon.hp}</li>
                <li>Attack: {pokemon.attack}</li>
                <li>Defense: {pokemon.defense}</li>
                <li>Special-attack: {pokemon.specialAttack}</li>
                <li>Special-defense: {pokemon.specialDefense}</li>
                <li>Speed: {pokemon.speed}</li>
                <li>Height: {pokemon.height}</li>
                <li>Weight: {pokemon.weight}</li>
            </ul>
            <h4>Types:</h4>
            <ul>
            {pokemon.pokemonTypes && pokemon.pokemonTypes.map(t => {
                return(
                    <TypeTag 
                        key={`${t}`}
                        name={t} 
                    />
                );
            })}
            </ul>
        </div>
    )
};