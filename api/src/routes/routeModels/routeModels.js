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
                return {name: p.name, id: p.id, types: p.types, img: p.img}
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
                types: response.data.types,
                img: response.data.sprites.other["official-artwork"].front_default,
                stats: response.data.stats,
                height: response.data.height,
                weight: response.data.weight
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
                        types: response.data.types,
                        img: response.data.sprites.other["official-artwork"].front_default,
                        stats: response.data.stats,
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
                    return dbResponse;
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
        const { name, hp, attack, defense, speed, height, weight, id } = newPokemon;
        try {
            let id = await this.getLastId();
            const newPokemon = await Pokemon.create({id, name, hp, attack, defense, speed, height, weight})
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
            const response = await axios.get(`https://pokeapi.co/api/v2/type`);
            response = response.results;
        } catch(err) {

        }
    }
}