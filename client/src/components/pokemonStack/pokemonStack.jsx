import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom";

import { getPokemon, getTypes } from "../../redux/actions";
import ClearAll from "../clearAll/clearAll";
import Filtering from "../filterTags/filtering";
import { filterTags, searchTag } from "../filterTags/filterTags";
import Order, { orderTags } from "../order/tagOrder";
import Pagination from "../pagination/pagination";
import PokemonTag from "../pokemonTag/pokemonTag";


export default function PokemonStack(){

    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPokemon());
        dispatch(getTypes());
    }, [dispatch]);

    let pokemon = useSelector(state => state.pokemon);
    let types = useSelector(state => state.types);
    
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
        <div>

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

            {calculatedTags && calculatedTags.map(p => {
                return (
                    <PokemonTag
                        id={p.id}
                        key={p.id}
                        name= {p.name}
                        img= {p.img}
                        types={p.types}
                        attack={p.attack}
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
            ) : <p>catching pokemon</p> /*<img src="../../../public/loadingPoke" alt="loading"/>*/}
        </div>
    );
};