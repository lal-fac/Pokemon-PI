import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getPokemon } from "../../redux/actions";
import { PokemonTag } from "../pokemonTag/pokemonTag";

export default function PokemonStack(){

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemon())
    }, []);
    let pokemon = useSelector(state => state.pokemon);

    console.log(pokemon)
    return (
        <div>
            <p>Pokemon Stack</p>
            {pokemon && pokemon.map(p => {
                return (
                    <PokemonTag
                        key={p.id}
                        name= {p.name}
                        img= {p.img}
                        types={p.types}
                    />
                );
            })}
        </div>
    );
};