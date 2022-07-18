

const initialState = {
    pokemon: [],
    types: [],
    pokemonDetail: {},
    lastId: undefined
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
        case'cleanPokemonDetail':
            return {
                ...state,
                pokemonDetail: {}
            }
        case'setLastId':
            return{
                ...state,
                lastId: action.payload + 1
            }
        default:
            return {...state};
    }
}

export default rootReducer;