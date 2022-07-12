import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { getPokemon } from "../../redux/actions";
import Pagination from "../pagination/pagination";
import { PokemonTag } from "../pokemonTag/pokemonTag";

export default function PokemonStack(){

    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemon())
    }, []);
    let pokemon = useSelector(state => state.pokemon);

    const [ activePage, setActivePage ] = useState(1);
    const tagsPerPage = 12;
    const count = pokemon.length;
    const totalPages = Math.ceil(count / tagsPerPage);
    const calculatedTags = (
        pokemon.slice((activePage - 1) * tagsPerPage, activePage * tagsPerPage)
    );

    return (
        <div>
            {calculatedTags && calculatedTags.map(p => {
                return (
                    <PokemonTag
                        id={p.id}
                        key={p.id}
                        name= {p.name}
                        img= {p.img}
                        types={p.types}
                    />
                );
            })}
            {count > 0 ? (
                <Pagination
                activePage = {activePage}
                count = {count}
                tagsPerPage = {tagsPerPage}
                totalPages = {totalPages}
                setActivePage = {setActivePage} 
            />
            ) : <p>No Pokemon found</p>}
        </div>
    );
};