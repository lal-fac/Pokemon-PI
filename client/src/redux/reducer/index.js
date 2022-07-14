// import {actions} from '../actions/index.js';

const initialState = {
    pokemon: [],
    types: [],
    pokemonDetail: {}
};

const rootReducer = function (state = initialState, action) {
    switch (action.type) {
        case 'getPokemon':
            return {
                ...state,
                pokemon: action.payload.data
            };
        case 'getPokemonDetail':
            return {
                ...state,
                pokemonDetail: action.payload.data
            };
        case 'getTypes':
            return {
                ...state, 
                types: action.payload.data
            };
        default:
            return {...state};
    }
}

export default rootReducer;