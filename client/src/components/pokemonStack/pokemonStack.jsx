import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";

import { setLastId, getPokemon, getTypes } from "../../redux/actions";
import ClearAll from "../clearAll/clearAll";
import Filtering from "../filterTags/filtering";
import { filterTags, searchTag } from "../filterTags/filterTags";
import Order, { orderTags } from "../order/tagOrder";
import Pagination from "../pagination/pagination";
import PokemonTag from "../pokemonTag/pokemonTag";

import './pokemonStack.css';

export default function PokemonStack(){

    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPokemon());
        dispatch(getTypes());
    }, [dispatch]);

    let pokemon = useSelector(state => state.pokemon);
    pokemon = pokemon.map(p => {
        return {
            ...p, 
            pokemonTypes: p.types.map(e => e.name)
        }
    });
    console.log(pokemon[40])
    let types = useSelector(state => state.types);

    // send last used id to store
    dispatch(setLastId(pokemon.length));

    //get query name from url
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const name = queryParams.get('name')
    
    //filter Type and Created
    const [ filterType, setFilterType ] = useState('');
    const [ filterCreated, setFilterCreated ] = useState(null);
    const filter = {filterType, filterCreated};

    //sort config
    const [sort, setSort] = useState({orderBy: 'id', order: 'asc'});

    //displayed list
    let filteredTags = name ? searchTag(pokemon, name) : filterTags(pokemon, filter);
    orderTags(pokemon, sort);

    // pagination config.
    const [ activePage, setActivePage ] = useState(1);
    const tagsPerPage = 12;
    const count = filteredTags.length;
    const totalPages = Math.ceil(count / tagsPerPage);
    const calculatedTags = (
        filteredTags.slice((activePage - 1) * tagsPerPage, activePage * tagsPerPage)
    );

    return (
        <div id="stack">
            <div id="filters">
                <Order sort={sort} setSort={setSort}/>

                <Filtering
                    setFilterType = {setFilterType}
                    setFilterCreated = {setFilterCreated}
                    types= {types}
                />

                <ClearAll 
                    sort={sort}
                    setSort={setSort}
                    setFilterCreated={setFilterCreated}
                    setFilterType={setFilterType}
                    setActivePage={setActivePage}
                />

            </div>

            <div id="tagStack">
                {calculatedTags && calculatedTags.map(p => {
                    return (
                        <PokemonTag
                            id={p.id}
                            key={p.id}
                            name= {p.name}
                            img= {p.img}
                            pokemonTypes={p.pokemonTypes}
                            attack={p.attack}
                        />
                    );
                })}
            </div>
            <div id="pagination">
                {count > 0 ? (
                    <Pagination
                    activePage = {activePage}
                    count = {count}
                    tagsPerPage = {tagsPerPage}
                    totalPages = {totalPages}
                    setActivePage = {setActivePage} 
                />
                ) : <p>catching pokemon</p>
            }
            </div>

        </div>
    );
};