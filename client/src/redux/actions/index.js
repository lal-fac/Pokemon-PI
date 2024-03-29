import axios from 'axios';

export const getPokemon = () => dispatch => {
    return (
        axios.get(`http://localhost:3001/pokemon`)
        .then(pokemon => {
            dispatch({
                type: 'getPokemon',
                payload: pokemon
            })
        })
    );
};

export const cleanPokemonDetail = () => dispatch => {
    return dispatch({
        type: 'cleanPokemonDetail',
        payload: null
    })
};

export const getPokemonDetail = (poke) => dispatch => {
    return (
        axios.get(`http://localhost:3001/pokemon/${poke}`)
        .then(pokemon => {
            dispatch({
                type: 'getPokemonDetail',
                payload: pokemon
            })
        })
    )
};

export const getTypes = () => dispatch => {
    return (
        axios.get('http://localhost:3001/types')
        .then(types => {
            dispatch({
                type: 'getTypes',
                payload: types
            })
        })
    );
};

export const setLastId = (id) => dispatch => {
    return dispatch({
        type: 'setLastId',
        payload: id
    })
}