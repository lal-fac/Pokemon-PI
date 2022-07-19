export function filterTags(pokemon, filter){
    let filteredTags = pokemon;
    filteredTags = filterType(filteredTags, filter.filterType);
    filteredTags = filterCreated(filteredTags, filter.filterCreated);
    return filteredTags;
}

function filterType(filteredTags, filterType){
    if(!filterType){
        return filteredTags;
    } else {
        filteredTags = filteredTags.filter(t => t.pokemonTypes.includes(filterType));
        return filteredTags;
    }
}

function filterCreated(filteredTags, filterCreated){
    if(!filterCreated){
        return filteredTags;
    } else {
        filteredTags = filteredTags.filter(t => t.created.toString() === filterCreated);
        return filteredTags;
    }
}

export function searchTag(pokemon, searchName){
    let filteredTags = pokemon;
    return filteredTags = filteredTags.filter(t => t.name === searchName)
}