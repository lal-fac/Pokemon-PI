const axios = require('axios');
const express = require('express');

const { Pokemon, Types } = require('../../db.js')

module.exports = {
    getPokemon: async function(){
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=40`);
            let apiData = await Promise.all(
                response.data.results.map(p => {
                    return this.getPokemonDetailName(p.name);
                })
            );
            apiData = apiData.map(p => {
                return {
                    name: p.name, 
                    id: p.id, 
                    pokemonTypes: p.pokemonTypes, 
                    img: p.img, 
                    created: p.created, 
                    attack: p.attack
                }
            });

            let dbData = await Pokemon.findAll({
                attributes: ['name', 'id', 'img'],
                include: [{model: Types}]
            });
            let listData = apiData.concat(dbData); 
            
            return listData;
        } catch (err) {
            throw new Error('Pokemon list error');
        }
    },
    getPokemonDetailName: async function(nameQ) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${nameQ}`);
            const data = {
                name: response.data.name,
                id: response.data.id,
                pokemonTypes: response.data.types.map(e => e.type.name),
                img: response.data.sprites.front_default,
                bigImg: response.data.sprites.other["official-artwork"].front_default,
                hp: response.data.stats[0].base_stat,
                attack: response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                specialAttack: response.data.stats[3].base_stat,
                specialDefense: response.data.stats[4].base_stat,
                speed: response.data.stats[5].base_stat,
                height: response.data.height,
                weight: response.data.weight,
                created: false
            };
            return data;
        } catch (err) {
            if (err.response.status = 404){
                try {
                    const dbResponse = await Pokemon.findAll({
                        where: {
                            name: nameQ
                        }
                    });
                    return dbResponse;
                } catch (err) {
                    throw new Error("Couldn't find that Pokemon");
                }
            } else {
                throw new Error("Couldn't find that Pokemon");
            }
        }
    },
    getPokemonDetailId: async function(id) {
        if(parseInt(id)){
            if(parseInt(id) <= 40){
                try {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                    const data = {
                        name: response.data.name,
                        id: response.data.id,
                        pokemonTypes: response.data.types.map(e => e.type.name),
                        img: response.data.sprites.front_default,
                        bigImg: response.data.sprites.other["official-artwork"].front_default,
                        hp: response.data.stats[0].base_stat,
                        attack: response.data.stats[1].base_stat,
                        defense: response.data.stats[2].base_stat,
                        specialAttack: response.data.stats[3].base_stat,
                        specialDefense: response.data.stats[4].base_stat,
                        speed: response.data.stats[5].base_stat,
                        height: response.data.height,
                        weight: response.data.weight
                    };
                    return data;
                } catch (err) {
                    throw new Error("Couldn't find that Pokemon");
                }
            } else {
                try {
                    const dbResponse = await Pokemon.findAll({
                        where: {
                            id: id
                        }
                    });
                    return dbResponse[0];
                } catch (err) {
                    throw new Error("Couldn't find that Pokemon");
                }
            }
        } else {
            try {
                return await this.getPokemonDetailName(id);
            } catch (err) {
                throw new Error("Couldn't find that Pokemon name");
            }
        }
    },
    addPokemon: async function(newPokemon) {
        const { 
            name, 
            hp, 
            attack, 
            defense, 
            speed, 
            height, 
            weight, 
            img, 
            bigImg, 
            pokemonTypes,
            specialAttack, 
            specialDefense
            } = newPokemon;
        try {
            let id = await this.getLastId();
            const newPokemon = await Pokemon.create(
                {
                id, 
                name, 
                hp, 
                attack, 
                defense, 
                speed, 
                height, 
                weight, 
                img, 
                bigImg, 
                pokemonTypes,
                specialAttack, 
                specialDefense
                }
            )
            return newPokemon;
        } catch(err) {
            throw new Error("Couldn't create Pokemon");
        }
    },
    getLastId: async function(){
        let id = await Pokemon.findOne({
            attributes: ['id'],
            order: [["id", "DESC"]]
        });
        
        if (!id) id = 40;
        else id = id.toJSON().id;
        id++;
        return id;
    },
    saveTypes: async function(){
        try{
            let response = await axios.get(`https://pokeapi.co/api/v2/type`);
            let types = response.data.results;

            await Types.bulkCreate(types);

            return await this.getTypes();
        } catch(err) {
            if(err.original.code == '23505'){
                return await this.getTypes();
            }else {
                throw new Error("Couldn't save Pokemon types");
            }
        }
    },
    getTypes: async function(){
        try{
            let types = await Types.findAll();
            return types;
        } catch(err){
            throw new Error("Couldn't get Pokemon types");
        }
    }
}